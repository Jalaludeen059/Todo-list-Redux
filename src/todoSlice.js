import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todos')) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, done: false });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state[index].text = newText;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleDone: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    moveTodo: (state, action) => {
      const { index, direction } = action.payload;
      const targetIndex = index + direction;
      if (targetIndex >= 0 && targetIndex < state.length) {
        [state[index], state[targetIndex]] = [state[targetIndex], state[index]];
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  toggleDone,
  moveTodo,
} = todoSlice.actions;

export default todoSlice.reducer;