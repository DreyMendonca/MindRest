import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather } from '@expo/vector-icons';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Notepad from '../pages/Notepad';
import Profile from '../pages/Profile';
import Games from '../pages/Games';
import ButtonNew from "../components/ButtonNew";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'blue',
        borderTopColor: 'transparent'
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black'
     }}>
  
      <Tab.Screen 
      name="Musicas" 
      component={MusicNavigation} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="music" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Jogos" 
      component={GamesNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="play" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen
      name="Home" 
      component={HomeNavigation} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused, size, color }) => (
          <ButtonNew size={size} color={color} focused={focused} />
        )
      }}
      />

      <Tab.Screen 
      name="Diário" 
      component={NotepadNavigation} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="book" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Perfil"
      component={ProfileNavigation} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="user" size={size} color={color} />
        )
      }}
      />

    </Tab.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function GamesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Games" component={Games} />
    </Stack.Navigator>
  );
}

function MusicNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Music" component={Music} />
    </Stack.Navigator>
  );
}

function NotepadNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notepad" component={Notepad} />
    </Stack.Navigator>
  );
}

function ProfileNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default StackNavigator;