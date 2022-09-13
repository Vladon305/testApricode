import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Dialog from 'react-native-dialog'
import { useActions } from '../hooks/useActions'

const Button = () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('Задание')

  const { addTodo } = useActions()

  const handleSave = () => {
    if (title.length > 0 && task.length > 0) {
      addTodo({ title, text: task })
      setDialogVisible(false)
      setTitle('')
      setTask('Задание')
    }
  }

  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.container} onPress={() => setDialogVisible(true)}>
        <Text style={styles.text}>Добавить</Text>
      </TouchableOpacity>
      <Dialog.Container visible={dialogVisible} footerStyle={{ borderTopColor: '#fff' }} buttonSeparatorStyle={{ backgroundColor: '#ffffff' }} contentStyle={{ backgroundColor: '#F9F9F9' }}>
        <Dialog.Title style={{ fontSize: 17 }}>Добавить предмет</Dialog.Title>
        <Dialog.Description style={{ fontSize: 13, color: '#737A82' }}>Укажите заголовок и задание</Dialog.Description>
        <Dialog.Input placeholder="Заголовок" clearTextOnFocus={true} wrapperStyle={styles.input} autoFocus={true} value={title} onChangeText={(text) => setTitle(text)} />
        <Dialog.Input placeholder="Задание" clearTextOnFocus={true} wrapperStyle={styles.input} value={task} onChangeText={(text) => setTask(text)} />
        <Dialog.Button label="Отменить" color="#C3C3C5" onPress={() => setDialogVisible(false)} />
        <Dialog.Button label="Сохранить" onPress={handleSave} />
      </Dialog.Container>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 55,
    flexDirection: 'row'
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3785CC',
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#fff',
    borderColor: 'rgba(60, 60, 67, 0.3)',
    borderWidth: 0.5
  }
})
