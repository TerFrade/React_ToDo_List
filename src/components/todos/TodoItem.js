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
            id={id}
            //Component drilling to take individual todoItem all the way to the state that can modified between true and false
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          <label for={id}>{title}</label>
          <button
            style={btnStyle}
            onClick={this.props.delTodoItem.bind(this, id)}
          >
            X
          </button>
        </h3>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "4px",
  cursor: "pointer",
  float: "right"
};

TodoItem.propType = {
  todoItem: PropTypes.object.isRequired
};

export default TodoItem;
