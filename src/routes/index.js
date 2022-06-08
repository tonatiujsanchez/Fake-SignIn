import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../views/LoginScreen'
import HomeScreen from '../views/HomeScreen'
import TodoListScreen from '../views/TodoListScreen'



const Routes = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="TodoList" component={TodoListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes