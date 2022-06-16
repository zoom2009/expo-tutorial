import React from 'react'
import { RecoilRoot } from 'recoil'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/Home'
import Task from './src/pages/Task'

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Today's tasks" }} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  </NavigationContainer>
)

const Main = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

export default Main