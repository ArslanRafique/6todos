import React from "react"
import Todo from "./Todo"

export default class Todolist extends React.Component
{
    
    removeTodo(todo){
        this.props.removeTodo(todo);
    }
    
    doneTodo(todo){
        this.props.doneTodo(todo);
    }
    
    
    render() {
        var hideElement = {
          display : 'none' 
        };
        
        var self = this;
        var index = 0;
        var todoType = 'pending';
        if(this.props.todoType){
            todoType = this.props.todoType;
        }
        var todos = this.props.todos.map(function(todo){
            index++;
            if(todo.done == true && todoType == 'pending'){
                return;
            }
            
            if(todo.done != true && todoType == 'done'){
                return;
            }
            
            return (
                <Todo removeTodo={self.removeTodo.bind(self)} id={todo.id} key={todo.id} num={index} text={todo.text} doneTodo={self.doneTodo.bind(self)} todoType={todoType}/>
            )
        });
        

        
        return (
            <div>
                <ul className="todo-list">
                    {todos}
                </ul>

            </div>
        );
    }
}