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
            text: todo    
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
    
  render() {
//      setTimeout(() => {
//          this.setState({todos: [
//              {id: 1, text: 'One'},
//              {id: 2, text: 'Two'}
//          ]});
//      }, 5000);
    return (
      <div class="row container-row">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Todolist todos={this.state.todos} addTodo={this.addTodo.bind(this)} removeTodo={this.removeTodo.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
