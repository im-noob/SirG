import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'Test',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Test Screen</Text>
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
