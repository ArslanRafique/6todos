import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Todolist from "./Todolist";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
        title: "Welcome",
        todos: [{id: 1, text:'Think'},
                {id: 2, text: 'Code'},
                {id: 3, text: 'Repeat'}]
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
