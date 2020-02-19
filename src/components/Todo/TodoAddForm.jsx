import React, { useState } from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// ! FOR TESTING ! 
import uuid from 'uuid/v4';

function TodoAddForm(props) {
    const [todoName, setTodoName] = useState('');

    return (
        <form>
            <Textfield
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="todo"
                name="todo"
                placeholder="Your todo item.."
                autoFocus
                value={todoName}
                onChange={e => setTodoName(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={event => {
                    props.onClick({ name: todoName, id: uuid() });
                    setTodoName('');
                    event.preventDefault();
                }}
            >
                Add
        </Button>
        </form>
    );
}

export default TodoAddForm;