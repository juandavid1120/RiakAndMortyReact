import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigation';
import { RandMProvider } from './src/context/RandMProvider';

function App(): any {
 
 
  return (
    <RandMProvider>
      <NavigationContainer>      
        <SafeAreaView />     
          <SafeAreaView style={{ flex: 1}}>
            <StackNavigator />          
          </SafeAreaView>   
      </NavigationContainer>
    </RandMProvider>
  );
}

export default App;
