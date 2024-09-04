import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './Components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className='todoList'>
      
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;