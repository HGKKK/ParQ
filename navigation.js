import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from './screens/MapScreen';
import SignupScreen from "./screens/SignupScreen";
import SpotDetailsScreen from "./screens/SpotDetailsScreen";


const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export const TestSpotDetailsStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SpotDetailsScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="SpotDetailsScreen" component={SpotDetailsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  </NavigationContainer>
) 