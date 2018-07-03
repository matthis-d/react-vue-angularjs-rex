import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  handleAddTodo = value => {
    const { todos } = this.state;
    const maxId = todos.length <= 0 ? 0 : Math.max(...todos.map(td => td.id));
    const newTodo = {
      id: maxId + 1,
      text: value,
      done: false
    };
    this.setState({ todos: [...todos, newTodo] });
  };

  handleToggleTodo = id => {
    const { todos } = this.state;
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <TodoForm onAdd={this.handleAddTodo} />
        <TodoList list={todos} onToggleDone={this.handleToggleTodo} />
      </div>
    );
  }
}

export default App;
