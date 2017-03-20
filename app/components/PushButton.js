import React, { PropTypes } from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

const PushButton = ({ text, onPress }) => (
  <TouchableHighlight onPress={onPress || null}>
    <View style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'cyan',
    borderWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});


PushButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

PushButton.defaultProps = {
  onPress: null,
};

export default PushButton;
