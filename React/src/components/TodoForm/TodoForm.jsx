import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Add todo : </label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          name="todo"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TodoForm;
