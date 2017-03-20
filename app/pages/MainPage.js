import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import PushButton from '../components/PushButton';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Bacon',
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <PushButton text="Start" onPress={() => navigate('Game')} />
        <PushButton text="How" onPress={() => navigate('How')} />
      </View>
    );
  }
}

MainPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
});

export default MainPage;
