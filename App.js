import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import AuthNavigation from './AuthNavigation';
import SpotDetailsScreen from './screens/SpotDetailsScreen';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';

// // suppress warnings
// LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <AuthNavigation />      
    </Provider>
  );
}

// const RootStack = createNativeStackNavigator({
//   HomeScreen: HomeScreen,
//   SpotDetailsScreen: SpotDetailsScreen,
// })

// export default class App React.Component{
//   render(){
//     return<RootStack/>;
//   }
// }