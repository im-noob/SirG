import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default class DiscussionScreen extends React.Component {
  static navigationOptions = {
    title: 'Discussion',
  };

  render() {
    return(
      <View style ={styles.container}>
        <Text>DiscussionScreen</Text>
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
