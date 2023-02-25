import React from 'react'
import { View, Text } from 'react-native'
import { CharacterList } from '../components/CharacterList'
import { Navbar } from '../components/Navbar'
import { useFetch } from '../hooks/useFetch'

export const HomeScreen = () => {
    const {data,isLoading} = useFetch("https://rickandmortyapi.com/api/character?page=1");
    console.log("estoy en HomeScreen");
    return (
        <View style={{flex:1, height:"100%"}}>
            <Navbar />
            <CharacterList characters={data?.results} />
        </View>
    )
}
