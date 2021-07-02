import React, { Component } from "react";
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import Card from "./components/Card";
import "./App.css";
import { todos } from "./todos.json";

class App extends Component {
  constructor(params) {
    super();
    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTask = this.removeTask.bind(this);
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
          <Card
            key={index}
            title={title}
            description={description}
            priority={priority}
            responsible={responsible}
            index={index}
            onRemoveTask={this.removeTask}
          />
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
