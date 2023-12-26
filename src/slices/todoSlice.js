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
const initialValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todolistArr = JSON.parse(todoList);
        todolistArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todolistArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todolistArr));
        state.todoList = todolistArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
            todo.author = action.payload.author;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
