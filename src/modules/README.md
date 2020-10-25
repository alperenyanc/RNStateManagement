# Simple Global State for React Native 
 
![Alt text](https://github.com/alperenyanc/RNStateManagement/blob/main/screens/ios.gif)
![Alt text](https://github.com/alperenyanc/RNStateManagement/blob/main/screens/android.gif)

 
### Installation
 
```sh
npm i react-native-simple-global-state
```
 
### Basic Usage
 
Firstly import StateProvider in your App.js
```shr
import {StateProvider} from 'react-native-simple-global-state';
```
Create initial state (obj)  
For example increaseNumber
There is the sipmle example for increase number.
```sh
 const App = () => {
  // first create initialState  obj.
  const initialState = {stateNumber: {number: 0}};
  // added reducer simple using state ,and actions
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increaseNumber':
        return {
          ...state,
          stateNumber: action.increaseNumber,
        };
      // other case
      default:
        return state;
    }
  };
  return (
    // added Provider
    // given initialState and reducer in stateProvider.
    <StateProvider initialState={initialState} reducer={reducer}>
     ... 
    </StateProvider>
  );
};
```
### How to use in component
First import useStateValue  in your components
```sh
  import {useStateValue} from 'react-native-simple-global-state';
```
#### usage in component
```sh
  const MyButton = () => {
  const [{stateNumber}, dispatch] = useStateValue();
  //statenumber is your number, dispach for action.
  const onPress = () => {
    dispatch({
    // type=> action.type
      type: 'increaseNumber',
     // action
      increaseNumber: {number: stateNumber.number + 1},
    });
  };
  return (
    <TouchableOpacity onPress={onPress} >
      <Text>Press Me!</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
```
```sh
import {useStateValue} from from 'react-native-simple-global-state';
const MyText = () => {
  const [{stateNumber}] = useStateValue();
  return (
    <View>
      <Text>{stateNumber.number}</Text>
    </View>
  );
};
export default MyText;
```
 