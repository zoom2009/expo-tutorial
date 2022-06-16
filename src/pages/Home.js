import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import Task from '../components/Task'
import Action from '../components/Action'
import task from '../stores/task'

const Home = ({
  navigation,
  route,
}) => {
  // const [taskList, setTaskList] = useState([
  //   { id: 1, text: 'record 1' },
  //   { id: 2, text: 'record 2' },
  // ])
  const interval = useRef()
  const debouce = useRef()
  const actionRef = useRef()

  const [taskList, setTaskList] = useRecoilState(task.taskList)

  const [search, setSearch] = useState('')

  const searchApi = (text) => {
    alert('call searchAPI :' + text)
  }
  const onSearch = (text) => {
    setSearch(text)

    clearTimeout(debouce.current)
    debouce.current = setTimeout(() => {
      searchApi(text)
    }, 1000)
  }

  // componentDidmount

  // componentWillUnmonth
  useEffect(() => {
    // interval.current = setInterval(() => {
    //   console.log('running')
    // }, 500)

    // console.log('running 1st time')

    // return () => {
    //   console.log('out of app')
    // }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ccc' }}>
      <Text style={styles.title}>Today's tasks</Text>
      {taskList.map(({ text, id }) => (
        <Task
          key={id}
          id={id}
          text={text}
          navigation={navigation}
        />
      ))}
      {/* <TextInput
        value={search}
        onChangeText={onSearch}
        style={{ marginLeft: '5%', width: 300, height: 50, backgroundColor: 'yellow' }}
        placeholder="Please fill"
      />
      <Button title='close' onPress={() => {
        const text = actionRef.current.getText()
        alert(text)
        console.log('interval.current:', interval.current)
        clearInterval(interval.current)
        actionRef.current.clearText()
      }} /> */}
      <View style={{ flex: 1 }} />
      <Action ref={actionRef} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: 15,
  },
})
