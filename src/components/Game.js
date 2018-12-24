import React from 'react';
import gamesService from "../services/games";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import Button from '@material-ui/core/Button'
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        padding: theme.spacing.unit,
    },
    tableHead: {
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing.unit,
        marginTop: 20,
    },
    title: {
        padding: theme.spacing.unit,
        textAlign: 'center'
    },
});

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            order: [],
            game: false
        }
    }

    componentDidMount() {
        gamesService.getAll().then(games =>
            this.setState({
                name: games[0] ? games[0].name : '',
                order: games[0] ? games[0].order : [],
                game: games[0] ? true : false
            })
        )
    }

    newGame = async (e) => {
        console.log('test')
        e.preventDefault()
        await gamesService.create()
        gamesService.getAll().then(games =>
            this.setState({
                name: games[0].name,
                order: games[0].order,
                game: true
            })
        )
    }

    render(){
        console.log(this.state.game)
        return(
            <Paper className={this.props.classes.root}>
                {this.state.game ?
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={this.props.classes.tableHead}>Murhaaja</TableCell>
                            <TableCell className={this.props.classes.tableHead}>Kohde</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.order.map(player =>
                            <TableRow key={player._id}>
                                <TableCell className={this.props.classes.tableHead} component="th" scope="row">
                                    {player.player.name}
                                </TableCell>
                                <TableCell className={this.props.classes.tableHead} component="th" scope="row">
                                    {player.target.name}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                    :
                    <h2 className={this.props.classes.title}>Ei pelejä</h2>}
                <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.newGame}>
                    Luo uusi peli
                </Button>
            </Paper>
        )
    }

}

export default withStyles(styles)(Game)