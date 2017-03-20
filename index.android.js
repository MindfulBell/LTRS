import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainPage from './app/pages/MainPage';
import GamePage from './app/pages/GamePage';

const App = StackNavigator({
  Main: { screen: MainPage },
  Game: { screen: GamePage },
});

AppRegistry.registerComponent('LTRS', () => App);
