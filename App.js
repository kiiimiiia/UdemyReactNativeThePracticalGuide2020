/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [outputText , setOutputText] = useState('Open up App.js to start working on your app')
  return (
  <View style={styles.container}>
    <Text>{outputText}</Text> 
    <Button title = "Change Text" onPress={() => setOutputText('The text changed')}/>
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
  }
});

