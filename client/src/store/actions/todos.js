import axios from 'axios';

import {
    FETCH_TODOS,
    RECIEVE_TODOS,
    ADD_TODO,
    DELETE_TODO,
    DONE
} from '../types';

export const recieveTodos = todos => {
    return {
        type: RECIEVE_TODOS,
        todos
    }
}

export const fetchTodos = () => {
    return dispatch => {
        axios.get('/api/todos')
        .then(response => dispatch(recieveTodos(response.data)))
        .catch(err => console.log(err));
    }
}

export const addTodo = string => {
    return dispatch => {
        const data = {
            action: string
        }
        axios.post('/api/todos',data)
        .then(response => {
            dispatch({
                type: ADD_TODO,
                todo: response.data
            })
        })
        .catch(err => console.log(err));
    }
}

export const deleteTodo = id => {
    return dispatch => {
        axios.delete(`/api/todos/${id}`)
        .then(response => {
            dispatch({
                type: DELETE_TODO,
                id
            })
        })
        .catch(err => console.log(err))
    }
}

export const done = id => {
    return dispatch => {
        axios.put(`/api/todos/${id}`)
        .then(response => {
            dispatch({
                type: DONE,
                id
            })
        })
    }
}