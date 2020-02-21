import React, { useState } from 'react';
import TodoAddForm from './TodoAddForm';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Todo from './Todo';
import { useEffect } from 'react';

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

    useEffect(() => {
        // Load the todos from the api. 
        // ! This should not be final. 
        fetch('http://localhost:4000/todo', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(res => res.json())
            .then(result => {
                setTodos(result);
            });
    }, []);

    const addTodo = item => {
        setTodos([...todos, item]);
    };

    const removeTodo = id => {
        let todosCopy = [...todos].filter(todo => todo.id !== id);
        setTodos(todosCopy);
    };

    const setTodoIsDone = (id, update) => {
        let updatingTodos = [...todos];
        let indexOfUpdate = updatingTodos.findIndex(t => t.id === id);
        updatingTodos[indexOfUpdate].done = update;
        setTodos(updatingTodos);
    }

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