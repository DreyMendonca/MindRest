import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    Welcome,
    SignIn,
    SignUp,
    Home,
    Music,
    Notepad,
    Profile,
    Games
} from '../pages'
import ShowBottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={ShowBottomTabs} />
    </Stack.Navigator>
)

export function HomeNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}

export function GamesNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Games' component={Games} />
        </Stack.Navigator>
    )
}

export function MusicNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Music' component={Music} />
        </Stack.Navigator>
    )
}

export function NotepadNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Notepad' component={Notepad} />
        </Stack.Navigator>
    )
}

export function ProfileNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}