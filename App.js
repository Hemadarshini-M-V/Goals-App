import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const changeEnteredGoal = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoal = () => {
    setCourseGoals( currentGoals => 
      [...currentGoals, {key: Math.random().toString(), 
        goal: enteredGoal }]);
    setEnteredGoal('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.goalInputContainer}>
        <TextInput placeholder="Course Goal" 
          style={styles.goalInput}
          onChangeText={changeEnteredGoal} 
          value={enteredGoal} />
        <Button title="Add" 
          style={styles.addButton} 
          onPress={addGoal} />
      </View>
      <FlatList 
        data ={courseGoals}
        renderItem = {(itemData)=>  
          <Text style={styles.goalList} >
            {itemData.item.goal}
          </Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  goalInputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  goalInput: { 
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    width: 500 
  },
  addButton: { 
    padding: 100 
  },
  goalList: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'cyan'
  }
});

