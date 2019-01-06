import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        isCompleted: false
      },
      {
        id: 2,
        title: "Get good at ReactJS",
        isCompleted: false
      },
      {
        id: 3,
        title: "Dark souls III",
        isCompleted: false
      }
    ]
  };

  //Creating custom method like this with the arrow function binds the 'this' to the prop
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id == todo.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
