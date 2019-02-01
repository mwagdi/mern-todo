import React from 'react';

export default ({ todo,deleteTodo,done }) => (
    <div className="todos__item flex-container">
        <div className={`todos__item_title flex-grow ${todo.done ? "completed" : ""}`}>{todo.action}</div>
        <div className="todos__item_actions">
            {!todo.done &&
            <a className="done" onClick={() => done(todo._id)}>Done</a>}
            <a className="delete" onClick={() => deleteTodo(todo._id)}>Delete</a>
        </div>
    </div>
);