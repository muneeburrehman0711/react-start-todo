import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodolist = window.localStorage.getItem('todoList');
  console.log(localTodolist);
  if (localTodolist) {
    return JSON.parse(localTodolist);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  // return [];
};
const initialState = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todolistArr = JSON.parse(todoList);
        todolistArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todolistArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
