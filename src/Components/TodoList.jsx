import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddItem from './AddItem';
import AddItemsList from './AddItemsList';
import SearchItem from './SearchItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [query, setQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (todos) {
      const filtered = todos.filter((todo) =>
        todo.text && todo.text.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [todos, query]);

  const handleAddTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: { text, done: false } });
  };

  const handleEditTodo = (index, text) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, text } });
  };

  const handleDeleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  const handleToggleDone = (index) => {
    dispatch({ type: 'TOGGLE_DONE', payload: index });
  };

  const handleMoveTodo = (index, direction) => {
    dispatch({ type: 'MOVE_TODO', payload: { index, direction } });
  };

  return (
    <div className="todo-list">
      <SearchItem query={query} setQuery={setQuery} />
      <AddItem onAdd={handleAddTodo} />
      <AddItemsList
        todos={filteredTodos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        onToggleDone={handleToggleDone}
        onMove={handleMoveTodo}
      />
    </div>
  );
};

export default TodoList;