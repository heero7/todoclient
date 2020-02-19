import React, { useState } from 'react';
import TodoAddForm from './TodoAddForm';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Todo from './Todo';

const renderTodos = (todos, removeFn) => {
    if (todos && Array.isArray(todos) && todos.length > 0) {
        return todos.map((todo, index) => 
        <Todo 
            key={index} 
            todo={todo}
            removeOnClick={removeFn} />);
    } else {
        return (
            <ListItem>
                <ListItemText>
                    {"You don't have any todos yet.. try adding one!"}
                </ListItemText>
            </ListItem>
        );
    }
};

function TodoList() {
    // Set the todos.
    const [todos, setTodos] = useState([]);

    const addTodo = item => {
        setTodos([...todos, item]);
    };

    const removeTodo = id => {
        let todosCopy = [...todos].filter(todo => todo.id !== id);
        setTodos(todosCopy);
    };

    return (
        <>
            <List>
                {renderTodos(todos, removeTodo)}
            </List>
            <TodoAddForm onClick={addTodo} />
        </>
    );
}

export default TodoList;