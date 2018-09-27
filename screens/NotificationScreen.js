import React from 'react';
import { View, StyleSheet,Text, } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';

class JobScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Job!</Text>
      </View>
    );
  }
}

class NewsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>News!</Text>
      </View>
    );
  }
}


class EventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Event!</Text>
      </View>
    );
  }
}
export default createMaterialTopTabNavigator(
  {
    Job: JobScreen,
    News: NewsScreen,
    Event: EventScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 13,
        fontWeight:'800',
      },
      style: {
        backgroundColor: '#0f9d58',
      },
      indicatorStyle :{
        backgroundColor:'white',
      }
    },
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
