import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/todos/AddTodo";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "Get good at ReactJS",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "Dark souls III",
        isCompleted: false
      }
    ]
  };

  //Creating custom method like this with the arrow function binds the 'this' to the prop
  //toggles isComplete between true and false
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

  //Delete Todo
  delTodoItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title, //Same thing -> title: title,
      isCompleted: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodoItem={this.delTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
