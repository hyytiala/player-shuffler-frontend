import React from 'react'
import TableCell from "@material-ui/core/TableCell/TableCell";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from "@material-ui/core/TableRow/TableRow";
import {withStyles} from "@material-ui/core";

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

class Person extends React.Component{

    delete = (event) => {
            event.preventDefault()
            const id = this.props.person.id
            this.props.handleRemove(id)
    }

    render(){

        return (
            <TableRow key={this.props.person.id}>
                <TableCell component="th" scope="row">
                    {this.props.person.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    <IconButton
                        aria-label="Delete"
                        className={this.props.classes.margin}
                        onClick={this.delete}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }
}

export default withStyles(styles)(Person);