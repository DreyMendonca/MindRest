import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    HomeNavigation,
    GamesNavigation,
    MusicNavigation,
    NotepadNavigation,
    ProfileNavigation
} from "./StackNavigation";

const Tab = createBottomTabNavigator()

export default function ShowBottomTabs() {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name='HomeTab' component={HomeNavigation}/>
            <Tab.Screen name='GamesTab' component={GamesNavigation}/>
            <Tab.Screen name='MusicTab' component={MusicNavigation}/>
            <Tab.Screen name='NotepadTab' component={NotepadNavigation}/>
            <Tab.Screen name='ProfileTab' component={ProfileNavigation}/>
        </Tab.Navigator>
    )
}