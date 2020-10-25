import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import useStateValue()
import {useStateValue} from '../modules/context/state';

const MyBackText = () => {
  const [{stateNumber}] = useStateValue();
  return <Text
   numberOfLines={3}
   
   style={styles.text}>{stateNumber.number}</Text>;
};

export default MyBackText;

const styles = StyleSheet.create({
  text: {
    fontSize: 300,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: -1,
    color: '#7E828015',
    top: 100,
    width:'100%',
    textAlign:'center'
  },
});
