import { StyleSheet, KeyboardAvoidingView, StatusBar, TouchableOpacity, TextInput, View, Platform, Keyboard } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { useHeaderHeight } from '@react-navigation/elements'
import task from '../stores/task';

const Action = ({

}, ref) => {
  const [input, setInput] = useState('')
  const [taskList, setTaskList] = useRecoilState(task.taskList)

  const offset = useHeaderHeight() + StatusBar.currentHeight

  const onAdd = () => {
    const newTask = { id: taskList.length, text: input }
    setTaskList([newTask, ...taskList])
    setInput('')
    Keyboard.dismiss()
  }

  useImperativeHandle(ref, () => ({
    getText: () => input,
    setText: (text) => setInput(text),
    clearText: () => setInput(''),
  }))

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={offset}
    >
      <View style={styles.container}>
        <TextInput
          value={input}
          // onChangeText={(text) => setInput(text)}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Write a task"
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.plusContainer}
          onPress={onAdd}
        >
          <Entypo name="plus" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default forwardRef(Action)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  plusContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 45,
    marginLeft: 10,
  },
  input: {
    width: '70%',
    fontSize: 15,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
})