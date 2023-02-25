import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CharacterScreen = () => {
    const navigation: any = useNavigation();
    return (
    <View>
        <Text>
           CharacterScreen
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text>Volver</Text>
        </TouchableOpacity>
    </View>
  )
}
