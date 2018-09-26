import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Profile',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
