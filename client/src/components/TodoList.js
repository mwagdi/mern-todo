import React,{ Component } from 'react';

import ListItemContainer from '../containers/ListItemContainer';

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
    }
    componentDidMount(){
        this.props.fetchTodos();
    }
    handleSubmit = event => {
        event.preventDefault();
        const { input } = this.state;
        if(input !== ""){
            this.props.addTodo(input);
            this.setState({ input: "" })
        }
        else{
            alert("Fill input");
        }
    }
    render(){
        const { todoIds,todosById } = this.props;
        return(
            <div className="todos">
                <form className="flex-container" onSubmit={this.handleSubmit}>
                    <input
                    className="flex-grow"
                    placeholder="Write something..."
                    value={this.state.input}
                    onChange={e => this.setState({ input: e.target.value })}
                    type="text" />
                    <input type="submit" value="Add Todo"/>
                </form>
                {todoIds.map((todo,i) => <ListItemContainer todo={todosById[todo]} key={i} />)}
            </div>
        )
    }
}