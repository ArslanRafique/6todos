import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Todolist from "./Todolist";

export default class Layout extends React.Component {
  constructor() {
    super();
    var todos = localStorage.getItem( 'todos' ) || 1;
    if(todos == 1){
        todos = [];
    }
    else{
        todos = JSON.parse(todos);
    }
      
    this.state = {
        title: "Welcome",
        todos: todos
    };
      
  }

  changeTitle(title) {
    this.setState({title});
  }
    
  addTodo(todo){
      const todos = this.state.todos;
      todos.push(
        {
            id: todos.length + 1,
            text: todo,
            done: false
        }
      );
      
      this.setState(
        {todos: todos}
      );
      
      
      localStorage.setItem( 'todos', JSON.stringify(todos));
  }
    
  removeTodo(todo){
      
      Array.prototype.remove = function(index){
        this.splice(index,1);
      }
      
      const todos = this.state.todos;
      for(var i=0; i<todos.length; i++){
          if(todos[i].id == todo){
              todos.remove(i);
          }
      }
      
      this.setState(
        {todos: todos}
      );
      
      localStorage.setItem( 'todos', JSON.stringify(todos));
      
  }
    
  doneTodo(todo){
      
      var todos = this.state.todos;
      for(var i=0; i<todos.length; i++){
          if(todos[i].id == todo){
              todos[i].done = true;
          }
      }
      
      this.setState(
        {todos: todos}
      );
      
      localStorage.setItem( 'todos', JSON.stringify(todos));
      
  }

  getTodoText(e) {
    if(e.charCode == 13 || e.keyCode == 13){
        const text = e.target.value;
        this.addTodo(text); 
        e.target.value = '';
    }
  }
    
  render() {
    if(this.state.todos.length < 6){
        this.hideElement = {
        display: 'block'
        }
    }
    else{
        this.hideElement = {
        display: 'none'
        }
    }
      
    return (
      <div class="row container-row">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Todolist todos={this.state.todos} addTodo={this.addTodo.bind(this)} removeTodo={this.removeTodo.bind(this)} doneTodo={this.doneTodo.bind(this)} todoType={'pending'}/>
        <div className="form-group">
            <input className="form-control todo-input" type="text" onKeyPress={this.getTodoText.bind(this)} placeholder="Add something amazing to do..." style={this.hideElement}/>
        </div>
        <Todolist todos={this.state.todos} addTodo={this.addTodo.bind(this)} removeTodo={this.removeTodo.bind(this)} doneTodo={this.doneTodo.bind(this)} todoType={'done'}/>
        <Footer />
      </div>
    );
  }
}
