import React from "react";

export default class Todo extends React.Component {
    
    removeTodo(e){
        this.props.removeTodo(this.props.id);
    }
    
    doneTodo(e){
        this.props.doneTodo(this.props.id);
    }
    
    switchClass(){
        if(this.props.todoType == 'pending'){
            return '';
        }
        else{
            return 'fade';
        }
    }
    
    render() {
        const className = this.switchClass();
        
        return (
            <li className={className}>
                <span className="li-number">
                    {this.props.num}
                </span>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.props.text}
                    </div>
                </div>
                <div onClick={this.doneTodo.bind(this)} className="done-icon"><img src="img/tick.svg"></img></div>
                <div onClick={this.removeTodo.bind(this)} className="delete-icon"><img src="img/delete.svg"></img></div>
            </li>
        );
    }
} 