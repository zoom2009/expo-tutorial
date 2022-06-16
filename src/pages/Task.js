import { ActivityIndicator, StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Task = ({
  navigation,
  route,
}) => {
  const { taskId } = route.params
  const [data, setData] = useState({})

  const getTask = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${taskId + 1}`)
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  }

  useEffect(() => {
    getTask()

    return () => {
      setData({})
    }
  }, [])

  return (
    <View style={styles.container}>
      {data.id ? (
        <>
          <Text style={styles.id}>TaskId: {taskId + 1}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Image style={styles.image} source={{ uri: data.url }} />
        </>
      ) : (
        <ActivityIndicator
          style={{ marginTop: 30, alignSelf: 'center' }}
          size="large"
          color="#555"
        />
      )}
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#555',
  },
  image: {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 10,
  },
})