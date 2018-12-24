import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import gamesService from '../services/games'

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

class Games extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
        }
    }

    componentDidMount() {
        console.log('täällä')
        gamesService.getAll().then(games =>
            this.setState({ games })
        )
    }

    render(props) {
        const {classes} = this.props;
        console.log(this.state.games)
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nimi</TableCell>
                            <TableCell>Kohde</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.games.players.map(game =>
                            <TableRow key={this.props.person.id}>
                                <TableCell component="th" scope="row">
                                    {this.props.person.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    Testi
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(Games);
