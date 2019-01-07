import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  //Single field
  onChangeTitle = e => this.setState({ title: e.target.value });

  /*
   * Multifields
   * onChange = e => this.setState({ [e.target.name]: e.target.value });
   */

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          type="text"
          name="title"
          style={{ width: "718px", padding: "5px" }}
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}

AddTodo.PropTypes = {
  addTodo: PropTypes.object.isRequired
};

export default AddTodo;
