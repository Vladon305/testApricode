import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Button from '../components/Button'
import Header from '../components/Header'
import Todo from '../components/Todo'
import { useActions } from '../hooks/useActions'

const Home = () => {
  const [selectedTodos, setSelectedTodos] = useState<'all' | 'done' | 'doing'>('all')

  const { todos, doneTodos, doingTodos } = useTypedSelector((state) => state.todos)
  const { setDoneTodos, setDoingTodos } = useActions()

  useEffect(() => {
    setDoneTodos(todos.filter((todo) => todo.isDone === true))
    setDoingTodos(todos.filter((todo) => todo.isDone === false))
  }, [todos])

  return (
    <View>
      <Header selectedTodos={selectedTodos} setSelectedTodos={setSelectedTodos} />
      <View style={styles.layout}>
        <View style={styles.todos}>
          {selectedTodos === 'all' && (
            <FlatList data={todos} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Todo id={item.id} title={item.title} text={item.text} isDone={item.isDone} />} />
          )}
          {selectedTodos === 'done' && (
            <FlatList data={doneTodos} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Todo id={item.id} title={item.title} text={item.text} isDone={item.isDone} />} />
          )}
          {selectedTodos === 'doing' && (
            <FlatList data={doingTodos} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Todo id={item.id} title={item.title} text={item.text} isDone={item.isDone} />} />
          )}
        </View>
        <Button />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 17
  },
  todos: {
    maxHeight: '76%',
    marginBottom: 10
  }
})
