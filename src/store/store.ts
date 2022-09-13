import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/todosSlice'

export const store = configureStore({
  reducer: { todos: todosReducer }
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch