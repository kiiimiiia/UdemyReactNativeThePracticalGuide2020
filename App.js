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
  TextInput,
} from 'react-native';


export default function App() {
 
  return (
  <View style={{padding : 30}}>
    <View style={{flexDirection: 'row' , justifyContent: 'space-between' , alignItems:'center'}}>
      <TextInput
       placeholder="CourseGoal"
       style={{ width:'80%' , borderColor:'black' , borderWidth:1}}/>
      <Button title="Add"/>
    </View>
    <View>

    </View>

  </View>
  );
};

const styles = StyleSheet.create({

});

