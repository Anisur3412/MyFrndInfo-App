/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import InfoContainer from './Templates/InfoContainer';
import InfoTemplate from './Templates/InfoTemplate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={InfoContainer} />
        <Stack.Screen name="infoTemplate"  component={InfoTemplate}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
