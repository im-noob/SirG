import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    title: 'Notification',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>NotificationScreen</Text>
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
