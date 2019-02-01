import { connect } from 'react-redux';

import { fetchTodos,addTodo } from '../store/actions';
import TodoList from './../components/TodoList';

const mapStateToProps = state => {
    const { todoIds,todosById } = state.todos;
    return {
        todoIds,
        todosById
    }
}

export default connect(mapStateToProps,{ fetchTodos,addTodo })(TodoList);