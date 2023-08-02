import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Pagina from "./pagina";

export default function Routes(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>

            <Stack.Screen
            name='Login'
            component={Login}
            options={{
                headerTitle: 'Login',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'darkgreen',
                fontSize: 26} 
            }}/>

            <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{
                headerTitle: 'Cadastro',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'darkblue',
                fontSize: 26} 
            }}/>

            <Stack.Screen
            name='Pagina'
            component={Pagina}
            options={{
                headerShown: false
            }}
            />

        </Stack.Navigator>
    );
}