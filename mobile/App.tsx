import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import {AppLoading} from 'expo'
import Routes from './src/routes';
import {Roboto_400Regular,Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold,useFonts} from '@expo-google-fonts/ubuntu'


export default function App() {
  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Routes/>
    </>
  );
}








// ❯ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
// ❯ npm i @react-navigation/native
// ❯ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// ❯ npm i @react-navigation/stack
// ❯ expo install react-native-maps
// ❯ expo install expo-constants
// ❯ expo install react-native-svg 
// ❯ npm install axios 
// ❯ expo install expo-location
// ❯ expo install expo-mail-composer 