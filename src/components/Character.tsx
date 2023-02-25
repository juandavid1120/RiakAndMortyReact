import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RandMContext } from '../context/RandMContext';

export const Character = ({character}:any) => {
  const navigation: any = useNavigation();
    const {findCharacter}= useContext(RandMContext);

  const setCharacter = (character:any) => {
    
    findCharacter(character)
    
   navigation.navigate("CharacterScreen")
  }
    return (
    <TouchableOpacity onPress={() => setCharacter(character)}>
       <View>
       <Image source={{uri: character.image}} style={{width: 200, height: 200}} />
        <Text>
          {character.name}
        </Text>
        <Text>
          {character.status}
        </Text>
        <Text>
          {character.species}
        </Text>
        <Text>
          {character.gender}
        </Text>
        <Text>
          {character.origin.name}
        </Text>
       </View>
    </TouchableOpacity>
  )
}
