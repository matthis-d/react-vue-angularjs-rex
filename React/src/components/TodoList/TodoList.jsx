import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list, onToggleDone }) => (
  <ul>
    {list.map(item => (
      <TodoItem
        key={item.id}
        text={item.text}
        done={item.done}
        onToggleDone={() => onToggleDone(item.id)}
      />
    ))}
  </ul>
);

export default TodoList;
