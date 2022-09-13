import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { counter } from '../../utils'

type Todo = {
  id: number
  title: string
  text: string
  isDone: boolean
}

type AddTodoDto = {
  title: string
  text: string
}

const initialState = {
  todos: [] as unknown as Todo[],
  doneTodos: [] as unknown as Todo[],
  doingTodos: [] as unknown as Todo[]
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setDoneTodos: (state, action: PayloadAction<Todo[]>) => {
      state.doneTodos = action.payload
    },
    setDoingTodos: (state, action: PayloadAction<Todo[]>) => {
      state.doingTodos = action.payload
    },
    addTodo: (state, action: PayloadAction<AddTodoDto>) => {
      state.todos.push({ ...action.payload, id: counter(), isDone: false })
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    setTodoDone: (state, action: PayloadAction<number>) => {
      state.todos.forEach((todo, i) => {
        if (todo.id === action.payload) {
          state.todos[i].isDone = !state.todos[i].isDone
        }
      })
    }
  }
})

export const todosReducer = todosSlice.reducer
export const todosActions = todosSlice.actions
