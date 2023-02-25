import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { Text, View,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RandMContext } from '../context/RandMContext';


export const CharacterScreen = () => {
    const navigation: any = useNavigation();
    const ctx= useContext(RandMContext);
    console.log(" estoy aqui" ,ctx);
    return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}   showsHorizontalScrollIndicator={false}>
        <View>       
       <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
           <Text>Volver</Text>
       </TouchableOpacity>
       <Image source={{uri: ctx.state.image}} style={{width: 200, height: 200}} />

       <Text>
           {ctx.state.name}
       </Text>

       <Text>
           {ctx.state.status}
       </Text>

       <Text>
           {ctx.state.gender}
       </Text>
       <Text>
           {ctx.state.species}
       </Text>
       <Text>
           {ctx.state.origin.name}
       </Text>

       
   </View>
    </ScrollView>
  )
}
