import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import ChooseData from '../Screens/ChooseData';
import Locations from '../Screens/Locations';
import Battles from '../Screens/Battles';
import Artefacts from '../Screens/Artefacts';
import RandomCharacter from '../Screens/RandomCharacter';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ChooseData" component={ChooseData} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen name="Battles" component={Battles} />
        <Stack.Screen name="Artefacts" component={Artefacts} />
        <Stack.Screen name="RandomCharacter" component={RandomCharacter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
