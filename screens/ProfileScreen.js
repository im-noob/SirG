import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Profile',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Profile Screen</Text>
      </ScrollView>
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
