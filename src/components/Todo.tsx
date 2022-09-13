import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import CheckVector from '../assets/CheckVector'
import Trash from '../assets/Trash'
import { useActions } from '../hooks/useActions'

type Props = {
  id: number
  title: string
  text: string
  isUseBorder?: boolean
  isDone: boolean
}

const Todo: FC<Props> = ({ id, title, text, isUseBorder = true, isDone }) => {
  const { setTodoDone, deleteTodo } = useActions()

  return (
    <View style={isUseBorder ? styles.todo : styles.noBorderTodo}>
      <TouchableOpacity style={isDone ? styles.activeCheckbox : styles.checkbox} onPress={() => setTodoDone(id)}>
        <CheckVector isDone={isDone} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={isDone ? { ...styles.text, textDecorationLine: 'line-through' } : styles.text}>{text}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.delete} onPress={() => deleteTodo(id)}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#EEEEEF',
    borderBottomWidth: 1
  },
  noBorderTodo: {
    borderBottomWidth: 0
  },
  checkbox: {
    padding: 5,
    width: 30,
    height: 30,
    marginRight: 17,
    borderColor: '#292D32',
    borderWidth: 1.5,
    borderRadius: 8
  },
  activeCheckbox: {
    padding: 5,
    width: 30,
    height: 30,
    marginRight: 17,
    backgroundColor: '#469D3E',
    borderRadius: 8
  },
  content: {
    flex: 1
  },
  title: {
    color: '#3B3B3B',
    fontWeight: '500',
    fontSize: 17
  },
  text: {
    color: '#6F767E',
    fontWeight: '400',
    fontSize: 13
  },
  delete: {
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 17,
    backgroundColor: '#F8F8F8',
    borderRadius: 8
  }
})
