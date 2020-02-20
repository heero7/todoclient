import React, { useState } from 'react';
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

    const [isDone, setIsDone] = useState(false);

    const toggle = () => {
        setIsDone(!isDone);
    };

    const strikethrough = {
        textDecoration: 'line-through'
    };
    return (
        <ListItem>
            {isDone ? 
                <ListItem
                    disableTypography
                    style={strikethrough}>
                        <ListItemText>{name}</ListItemText>
                </ListItem> :
                <ListItem>
                    <ListItemText>{name}</ListItemText>
                </ListItem>
            }
            <ListItemSecondaryAction>
                <IconButton onClick={toggle}>
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