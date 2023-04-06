import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import { Entypo, Feather} from '@expo/vector-icons';

export default function ButtonNew({focused, size, color}){
    return(
        <View style={[styles.container, { backgroundColor: focused ? '#3eccf5' : '#121212'} ]}>
            <Entypo name="plus" color={focused ? '#FFF' : '#DDD'} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3eccf5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
});
    