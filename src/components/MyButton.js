import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import useStateValue()
import {useStateValue} from '../modules/context/state';

const MyButton = () => {
  const [{stateNumber}, dispatch] = useStateValue();
  const onPress = () => {
    dispatch({
      type: 'increaseNumber',
      increaseNumber: {number: stateNumber.number + 1},
    });
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Press Me!</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
