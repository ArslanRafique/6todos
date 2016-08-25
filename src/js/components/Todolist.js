import React from "react"
import Todo from "./Todo"

export default class Todolist extends React.Component
{
    getTodoText(e) {
        if(e.charCode == 13 || e.keyCode == 13){
            const text = e.target.value;
            this.props.addTodo(text); 
            e.target.value = '';
        }
    }
    
    render() {
        const todos = this.props.todos.map(function(todo){
            return (
                <Todo key={todo.id} text={todo.text} />
            )
        });
        
        return (
            <div>
                <ul className="todo-list">
                    {todos}
                </ul>
                <div className="form-group">
                    <input className="form-control todo-input" type="text" onKeyPress={this.getTodoText.bind(this)} placeholder="Add something amazing to do..."/>
        

                </div>
            </div>
        );
    }
}