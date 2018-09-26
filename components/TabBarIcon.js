import React from 'react';
//import { Icon } from 'expo';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={30}
        style={{ marginBottom: -3 ,marginTop: 3, }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}