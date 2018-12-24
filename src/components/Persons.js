import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import personsService from '../services/persons'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Person from "./Person";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

class Persons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            persons: [],
        }
    }

    componentDidMount() {
        personsService.getAll().then(persons =>
            this.setState({ persons })
        )
    }

    handleInputChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        this.addPerson(event)
    }

    addPerson = async (e) => {
        e.preventDefault()
        const object = {
            name: this.state.name
        }
        if (object.name.length > 0) {
            const savedPerson = await personsService.create(object)
            this.setState({
                persons: this.state.persons.concat(savedPerson),
                name: ''
            })
        }
    }

    removePerson = async (id) => {
        try {
            console.log(id)
            await personsService.remove(id)
            this.setState({
                persons: this.state.persons.filter(person => person.id !== id)
            })
        } catch (error) {
            console.log(error)
            this.setState({
                error: 'Something went wrong'
            })
        }
    }

    render(props) {
        const {classes} = this.props;
        console.log(this.state.persons)
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nimi</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.persons.map(person =>
                            <Person
                                key={person.id}
                                person={person}
                                handleRemove={this.removePerson}
                            />
                        )}
                    </TableBody>
                </Table>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-name"
                        label="Nimi"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.name}
                        onChange={this.handleInputChangeName}
                    />
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.addPerson}>
                        <AddIcon />
                    </Fab>
                </form>
            </Paper>
        );
    }
}


Persons.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Persons);
