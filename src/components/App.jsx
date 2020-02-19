import React from 'react';

import Container from "@material-ui/core/Container";

import TodoList from './Todo/TodoList.jsx';

function App() {
    return (
        <Container maxWidth="sm">
            <TodoList />
        </Container>
    );
}

export default App;