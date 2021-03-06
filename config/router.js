import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../components/Home';

const Tab = createBottomTabNavigator();

Icon.loadFont();

export default Tabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    tabBarOptions={{
      activeBackgroundColor: '#000',
      inactiveBackgroundColor: '#000',
      activeTintColor: '#fff',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Icon name="ios-home" color={focused ? '#fff' : '#666'} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="Discover"
      component={Home}
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({focused}) => (
          <Icon
            name="ios-compass"
            color={focused ? '#fff' : '#666'}
            size={22}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={Home}
      options={{
        tabBarLabel: 'Add',
        tabBarIcon: ({focused}) => (
          <Icon name="ios-add" color={focused ? '#fff' : '#666'} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="Inbox"
      component={Home}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({focused}) => (
          <Icon name="ios-mail" color={focused ? '#fff' : '#666'} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="Me"
      component={Home}
      options={{
        tabBarLabel: 'Me',
        tabBarIcon: ({focused}) => (
          <Icon name="ios-person" color={focused ? '#fff' : '#666'} size={22} />
        ),
      }}
    />
  </Tab.Navigator>
);
