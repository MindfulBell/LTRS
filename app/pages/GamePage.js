import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Bacon',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>GAME GOES HERE</Text>
      </View>
    );
  }
}

export default GamePage;
