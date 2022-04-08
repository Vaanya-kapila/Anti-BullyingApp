import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"

import Problem from './screens/Problem'
import Home from './screens/Home'
import Help from './screens/Help'
import Solutions from './screens/Solutions'
import Facts from './screens/Facts'
import Chat from './screens/Chat'
import Solution1 from './screens/Solution1'
import Solution2 from './screens/Solution2'
import Solution3 from './screens/Solution3'
import Solution4 from './screens/Solution4'

const Stack = createStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Problem"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Problem" component={Problem} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Help" component={Help} />         
          <Stack.Screen name="Solutions" component={Solutions} />
           <Stack.Screen name="Facts" component={Facts} />
           <Stack.Screen name="Chat" component={Chat} />
           <Stack.Screen name="Solution1" component={Solution1} />
           <Stack.Screen name="Solution2" component={Solution2} />
           <Stack.Screen name="Solution3" component={Solution3} />
           <Stack.Screen name="Solution4" component={Solution4} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}