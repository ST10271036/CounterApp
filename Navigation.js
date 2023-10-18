import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './CounterScreen';
import DisplayCounterScreen from './DisplayCounterScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="DisplayCounterScreen" component={DisplayCounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
