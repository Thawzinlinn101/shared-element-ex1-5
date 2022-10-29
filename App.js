import React from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/container/home';
import Exercise1 from './src/container/exercise1/Screens/travelList';
import TravelListDetail from './src/container/exercise1/Screens/travelListDetail';
import Map from './src/container/exercise1/Screens/map';
import Exercise2 from './src/container/exercise2';
import Exercise3 from './src/container/exercise3';
import Exercise4 from './src/container/exercise4';
import Exercise5 from './src/container/exercise5';
enableScreens();

const Stack = createSharedElementStackNavigator();

export default function index({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Exercise1">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Exercise1" component={Exercise1} options={{ headerShown: false }} />
        <Stack.Screen name="TravelListDetail" component={TravelListDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Exercise2" component={Exercise2} options={{ headerShown: false }} />
        <Stack.Screen name="Exercise3" component={Exercise3} options={{ headerShown: false }} />
        <Stack.Screen name="Exercise4" component={Exercise4} options={{ headerShown: false }} />
        <Stack.Screen name="Exercise5" component={Exercise5} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
});