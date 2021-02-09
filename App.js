import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goalInputContainer}>
        <TextInput placeholder="Course Goal" style={styles.goalInput} />
        <Button title="Add" style={styles.addButton} />
      </View>
      <View>

      </View>
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
  }
});

