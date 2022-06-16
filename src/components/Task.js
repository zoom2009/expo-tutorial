import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import task from '../stores/task';

const Task = ({
  id,
  text,
  navigation,
}) => {
  const [taskList, setTaskList] = useRecoilState(task.taskList)

  const onRemove = (idIn) => () => {
    const newTaskList = taskList.filter(({ id }) => id !== idIn)
    setTaskList(newTaskList)
  }

  const onOpenSingleTask = (idIn) => () => {
    navigation.navigate('Task', { taskId: idIn })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onOpenSingleTask(id)}
      style={styles.container}
    >
      <View style={styles.square} />
      <Text style={styles.text}>{text}</Text>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onRemove(id)}
      >
        <Ionicons name="ios-trash-bin-outline" size={24} color="#c0392b" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default memo(Task)

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  square: {
    width: 28,
    height: 28,
    backgroundColor: '#3498db',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
})