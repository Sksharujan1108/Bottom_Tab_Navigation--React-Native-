import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreens';
import ProfileScreen from '../Screens/ProfileScreens';
import SettingScreen from '../Screens/SettingScreens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../Screens/ChatScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (rn === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }else if (rn === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            }else {
              iconName = focused ? 'settings': 'settings-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Seting" component={SettingScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
