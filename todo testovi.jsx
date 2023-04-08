// Todo.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './todo';

describe('Todo', () => {
  it('renders without error', () => {
    render(<Todo />);
  });

  it('adds a todo item when clicking the "Add Todo" button', () => {
    const { getByPlaceholderText, getByText, getByRole } = render(<Todo />);

    const inputElement = getByPlaceholderText('Enter a todo item...');
    const addButtonElement = getByText('Add Todo');

    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    fireEvent.click(addButtonElement);

    const todoItemElement = getByRole('listitem');
    expect(todoItemElement).toHaveTextContent('Buy groceries');
  });
});