import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyText from './MyText';
import MyButton from './MyButton';
import MyBackText from './MyBackText';
import {useStateValue} from '../modules/context/state';

const Index = () => {
  const [{stateNumber}] = useStateValue();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: stateNumber.number % 10 == 0 ? '#444' : '#333'},
      ]}>
      <MyButton />
      <MyText />
      <MyBackText />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
