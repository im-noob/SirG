import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

class TopicWiseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TopicWise!</Text>
      </View>
    );
  }
}

class FullTestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FullTest!</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
  TopicWise: TopicWiseScreen,
  FullTest: FullTestScreen,
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
