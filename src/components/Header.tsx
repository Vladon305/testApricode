import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC, useState, useCallback } from 'react'
import Dialog from 'react-native-dialog'

type Props = {
  selectedTodos: 'all' | 'done' | 'doing'
  setSelectedTodos: React.Dispatch<React.SetStateAction<'all' | 'done' | 'doing'>>
}
const Header: FC<Props> = ({ selectedTodos, setSelectedTodos }) => {
  const [dialogVisible, setDialogVisible] = useState(false)

  const handleAllTodos = useCallback(() => {
    if (selectedTodos !== 'all') setSelectedTodos('all')
    setDialogVisible(false)
  }, [selectedTodos])

  const handleDoneTodos = useCallback(() => {
    if (selectedTodos !== 'done') setSelectedTodos('done')
    setDialogVisible(false)
  }, [selectedTodos])

  const handleDoingTodos = useCallback(() => {
    if (selectedTodos !== 'doing') setSelectedTodos('doing')
    setDialogVisible(false)
  }, [selectedTodos])

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={() => setDialogVisible(true)}>
        <Text style={styles.text}>
          {selectedTodos === 'all' && 'Показывать все задания'}
          {selectedTodos === 'done' && 'Выполненные'}
          {selectedTodos === 'doing' && 'Не выполненные'}
        </Text>
      </TouchableOpacity>
      <Dialog.Container
        visible={dialogVisible}
        headerStyle={{ display: 'none' }}
        verticalButtons={true}
        footerStyle={{ borderTopColor: '#fff' }}
        buttonSeparatorStyle={{ backgroundColor: '#ffffff' }}
        contentStyle={{ backgroundColor: '#F9F9F9' }}
      >
        <Dialog.Button label="Показывать все задания" color={selectedTodos === 'all' ? undefined : '#737A82'} onPress={handleAllTodos} />
        <Dialog.Button label="Выполненные" color={selectedTodos === 'done' ? undefined : '#737A82'} onPress={handleDoneTodos} />
        <Dialog.Button label="Не выполненные" color={selectedTodos === 'doing' ? undefined : '#737A82'} onPress={handleDoingTodos} />
      </Dialog.Container>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    minHeight: 128,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#EEEEEF',
    borderBottomWidth: 1
  },
  button: {
    width: '91%',
    height: 36,
    borderWidth: 2,
    borderColor: '#3785CC',
    borderRadius: 8,
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#3785CC'
  }
})
