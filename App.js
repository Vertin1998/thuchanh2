import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import CartScreen from './cart';
import ProfileScreen from './profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'Indox') {
              iconName = 'chatbox';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: '#555',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} /><Tab.Screen name="Cart" component={CartScreen} /><Tab.Screen name="Indox" component={() => <></>} /><Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}