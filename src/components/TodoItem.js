import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoItem.isCompleted ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <h3>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </h3>
      </div>
    );
  }
}

TodoItem.propType = {
  todoItem: PropTypes.object.isRequired
};

export default TodoItem;
