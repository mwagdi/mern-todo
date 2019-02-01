import { combineReducers } from 'redux';
import {
    FETCH_TODOS,
    RECIEVE_TODOS,
    ADD_TODO,
    DELETE_TODO,
    DONE
} from '../types';

const todoIds = (state=[],action) => {
    switch(action.type){
        case RECIEVE_TODOS:
            return action.todos.map(todo => todo._id);

        case ADD_TODO:
            return [
                ...state,
                action.todo._id
            ];
        
        case DELETE_TODO:
            return state.filter(todo => {
                return todo !== action.id
            });   

        default:
            return state;
    }
}

const todosById = (state={},action) => {
    switch(action.type){
        case RECIEVE_TODOS:
            return action.todos.reduce((obj,todo) => {
                return {
                    ...obj,
                    [todo._id]: todo
                }
            },{});
        
        case ADD_TODO:
            return {
                ...state,
                [action.todo._id]: action.todo
            }

        case DELETE_TODO:
            const newState = JSON.parse(JSON.stringify(state));
            delete newState[action.id];
            return newState;

        case DONE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    done: true
                }
            }

        default:
            return state;
    }
}

export default combineReducers({
    todoIds,
    todosById
})