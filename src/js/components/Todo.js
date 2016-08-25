import React from "react";

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <div class="panel panel-default">
                    <div class="panel-body">
                        {this.props.text}
                    </div>
                </div>
            </li>
        );
    }
} 