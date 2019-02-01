import React from 'react';

import TodoListContainer from './containers/TodoListContainer';
import './assets/scss/app.scss';

export default () => (
    <div className="app flex-container flex-column align-center">
        <h1>To Do List</h1>
        <TodoListContainer />
    </div>
);