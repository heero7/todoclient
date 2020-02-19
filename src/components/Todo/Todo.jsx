import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from '@material-ui/core/IconButton';

function TodoText() {
    return (
        <ListItem></ListItem>
    )
}

function Todo(props) {
    let { id, name, done } = props.todo;
    const strikethrough = {
        textDecorationLine: 'line-through'
    };
    return (
        <ListItem>
            {done ? 
                <ListItem
                    disableTypography
                    style={strikethrough}>
                        {name}
                </ListItem> :
                <ListItem>{name}</ListItem>
            }
            <ListItemSecondaryAction>
                <IconButton onClick={() => done = !done }>
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