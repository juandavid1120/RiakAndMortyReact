import React, { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { CharacterScreen } from '../screens/CharacterScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    CharacterScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    console.log("estoy en stack Navegation");
 //   if( status === 'checking' ) return <Loading />
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >           
                <Stack.Screen name="HomeScreen" component={ HomeScreen } />
                <Stack.Screen name="CharacterScreen" component={ CharacterScreen } />               
        </Stack.Navigator>
    );
}