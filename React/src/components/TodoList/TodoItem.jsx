import React from 'react';

const TodoItem = ({ text, done, onToggleDone }) => (
  <li>
    <input type="checkbox" checked={done} onClick={onToggleDone} />
    <span className={done ? 'done' : ''}>{text}</span>
  </li>
);

export default TodoItem;
