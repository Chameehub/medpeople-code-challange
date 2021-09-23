import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from "react-native";
import { name as appName } from '../app.json';
import { warmGreen } from './config/colors';
import NavigationContainer from '../app/navigation';

export default class Medpeople extends Component {

  render() {
    return (
      <View style={{flex: 1 }} headerShown={false}>
        <StatusBar barStyle="light-content" backgroundColor={warmGreen} />
        <NavigationContainer />
      </View>
    );
  }

}

AppRegistry.registerComponent(appName, () => Medpeople);
