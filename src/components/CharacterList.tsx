import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Character } from './Character';

export const CharacterList = ({characters = []}:any) => {
   
  return (
   <View style={{height:"100%"}}>
     <FlatList data={characters} renderItem={(character:any) =>(
        
        <View key={character?.id}>
            
            <Character character={character.item}/>
        </View>
   
    )}>
       
    </FlatList>
   </View>
  )
}
