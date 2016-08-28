import React from "react";

export default class Todo extends React.Component {
    
    removeTodo(e){
        this.props.removeTodo(this.props.id);
    }
    
    render() {
        return (
            <li>
                <span className="li-number">
                    {this.props.num}
                </span>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.props.text}
                    </div>
                </div>
                <div onClick={this.removeTodo.bind(this)} className="delete-icon">X</div>
            </li>
        );
    }
} 