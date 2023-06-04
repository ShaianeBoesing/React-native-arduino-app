import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, Entypo } from "@expo/vector-icons"
import { StyleSheet, StatusBar } from 'react-native';

// Import your screens
import MorsePage from './pages/MorsePage';
import LightChangePage from './pages/LightChangePage';
import HistoryPage from './pages/HistoryPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8a5336',
        inactiveTintColor: '#BEBAB3',
        animationEnabled: true,
        
      }}>
        <Tab.Screen
          name="Luz"
          component={LightChangePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name='lightbulb' size={30} color={color} />
            )
          }} />
        <Tab.Screen
          name="Morse"
          component={MorsePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="dots-three-horizontal" size={30} color={color} />
            )
          }} />
        <Tab.Screen
          name="Histórico"
          component={HistoryPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="history" size={30} color={color} />)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
