import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const Character = ({character}:any) => {
  const navigation: any = useNavigation();
    return (
    <TouchableOpacity onPress={() => navigation.navigate("CharacterScreen")}>
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
