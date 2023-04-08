// Todo.js

import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo item..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Todo;