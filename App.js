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
 const [enteredGoal , setEnteredGoal] = useState('')
 const [courseGoals , setCourseGoals] = useState('')
 const gaoalInputHandler = (enteredText) =>{
  setEnteredGoal(enteredText)
 };

 const addGoalHandler = () =>{
  //  setCourseGoals({...courseGoals , enteredGoal})
  setCourseGoals(currentGoals => [...currentGoals , enteredGoal])

 }

  return (
  <View style={styles.screen}>
    <View style={styles.inutContainer}>
      <TextInput
       placeholder="CourseGoal"
       style={styles.input}
       onChangeText={gaoalInputHandler}
       value = {enteredGoal}/>
      <Button title="Add"
      onPress={addGoalHandler}/>
    </View>
    <View>

    </View>

  </View>
  );
};

const styles = StyleSheet.create({
  screen :{
    padding :50
  },
  input:{
    width:'80%' , 
    borderColor:'black' ,
    borderWidth:1
  },
  inutContainer:{
    flexDirection: 'row' , 
    justifyContent: 'space-between' , 
    alignItems:'center'

  }
  
});

