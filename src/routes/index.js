import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Music from '../pages/Music';
import Notepad from '../pages/Notepad';
import Profile from '../pages/Profile';
import Games from '../pages/Games';

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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeNavigation} />
      <Tab.Screen name="GamesTab" component={GamesNavigation} />
      <Tab.Screen name="MusicTab" component={MusicNavigation} />
      <Tab.Screen name="NotepadTab" component={NotepadNavigation} />
      <Tab.Screen name="ProfileTab" component={ProfileNavigation} />
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
  );r
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