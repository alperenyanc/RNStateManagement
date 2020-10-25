import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import useStateValue in state
import {useStateValue} from '../modules/context/state';

const MyText = () => {
  const [{stateNumber}] = useStateValue();
  return (
    <View style={styles.textView}>
      <Text style={styles.text}>{stateNumber.number}</Text>
    </View>
  );
};

export default MyText;

const styles = StyleSheet.create({
  textView: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
