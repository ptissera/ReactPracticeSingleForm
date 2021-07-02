import React, { Component } from "react";
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { todos } from "./todos.json";

class App extends Component {
  constructor(params) {
    super();
    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  removeTask(index) {
    this.setState({
      todos: [...this.state.todos.filter((e, i) => i !== index)],
    });
  }

  render() {
    const todos = this.state.todos.map(
      ({ title, description, priority, responsible }, index) => {
        return (
          <div className="col-md-4 mt-4">
            <div className="card">
              <div className="card-header">
                <h3>{title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {priority}
                </span>
              </div>
              <div className="card-body">
                <p>{description}</p>
                <p>
                  <mark className="px-3 badge-pill">{responsible}</mark>
                </p>
              </div>
              <div
                className="card-footer"
                onClick={this.removeTask.bind(this, index)}
              >
                <button className="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        );
      }
    );
    return (
      <div className="App">
        <Navigation titulo="Tasks" total={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
