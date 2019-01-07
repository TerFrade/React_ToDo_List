import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/About";
//import uuid from "uuid"; -> Use for hardcode data

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => this.setState({ todos: res.data })
    );
  }

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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );

    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // }); -> For hardcoded state.
  };

  //Add Todo
  addTodo = title => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title, //Same thing -> title: title,
    //   isCompleted: false
    // }; -> for hard coded states.
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      isCompleted: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    // this.setState({ todos: [...this.state.todos, newTodo] }); -> For hardcoded states.
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodoItem={this.delTodoItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
