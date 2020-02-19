import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from '@material-ui/core/IconButton';


function Todo(props) {
    const { id, name } = props.todo;
    return (
        <ListItem>
            <ListItemText>
                {name}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <CheckIcon />
                </IconButton>
                <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={() => props.removeOnClick(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;