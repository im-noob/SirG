import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {  } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        focused? 'home-outline': 'home-outline'   }
    />
  ),
};

const TestStack = createStackNavigator({
  Links: TestScreen,
});

TestStack.navigationOptions = {
  tabBarLabel: 'Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused? 'pencil-box-outline' : 'pencil-box-outline'}
    />
  ),
};

const DiscussionStack = createStackNavigator({
  Settings: DiscussionScreen,
});

DiscussionStack.navigationOptions = {
  tabBarLabel: 'Discussion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused?'plus-circle-outline': 'plus-circle-outline'}
    />
  ),
};

const NotificationStack = createStackNavigator({
  Settings: NotificationScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused ? 'bell-outline': 'bell-outline'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused? 'heart-outline' : 'heart-outline'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    TestStack,
    DiscussionStack,
    NotificationStack,
    ProfileStack,
  },
  {
    tabBarOptions:{
      showLabel: false,
    },
    
  }
  
);
