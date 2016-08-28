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
    
    hideElement(todos){
        if(this.props.todos.length>6){
            return 'hide'
        }
        return '';
    }
    
    removeTodo(todo){
        this.props.removeTodo(todo);
    }
    
    
    render() {
        var hideElement = {
          display : 'none' 
        };
        
        var self = this;
        var index = 0;
        var todos = this.props.todos.map(function(todo){
            index++;
            return (
                <Todo removeTodo={self.removeTodo.bind(self)} id={todo.id} key={todo.id} num={index} text={todo.text} />
            )
        });
        
        if(todos.length < 7){
            hideElement = {
                display: 'block'
            }
        }
        else{
            hideElement = {
                display: 'none'
            }
        }
        
        
        
        return (
            <div>
                <ul className="todo-list">
                    {todos}
                </ul>
                <div className="form-group">
                    <input className="form-control todo-input" type="text" onKeyPress={this.getTodoText.bind(this)} placeholder="Add something amazing to do..." style={hideElement}/>
                </div>
            </div>
        );
    }
}