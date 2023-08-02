import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Contato from '../Pages/Contato'

const Tab = createBottomTabNavigator();

export default function Pagina(){
  return(

      <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0}
      }}>
        
        <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Feather name='home' color={color} size={size}/>
          },
        }}/>

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({color, size}) => {
            return <Feather name='file-text' color={color} size={size}/>
          },
        }}/>

        <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({color, size}) => {
            return <Feather name='phone-call' color={color} size={size}/>
          },
        }}/>

      </Tab.Navigator>      
  );
}