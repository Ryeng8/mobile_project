import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen'
// import RegisterScreen from './Screens/RegisterScreen'
import bgImage from './imgs/bg1.jpg'

const Stack = createStackNavigator();
 

export class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen}/>
      </Stack.Navigator> 
       {/* <Stack.Navigator> */}
      {/* //     <Stack.Screen name='Register' component={RegisterScreen}/>
      //   </Stack.Navigator> */}
      </NavigationContainer> 
       
      
    )
  }
  }
  
  
export default App;


