import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = (enteredGoal) => {
    setCourseGoals( currentGoals => 
      [...currentGoals, {key: Math.random().toString(), 
        goal: enteredGoal }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput goalAdded={addGoal}/>
      <FlatList 
        data ={courseGoals}
        renderItem = {(itemData)=>  
          <GoalItem goal={itemData.item.goal}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

