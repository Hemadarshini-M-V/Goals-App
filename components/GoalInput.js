import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const changeEnteredGoal = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const clearGoal = () => {
        setEnteredGoal('');
    }

    return (
        <View style={styles.goalInputContainer}>
            <TextInput placeholder="Course Goal" 
                style={styles.goalInput}
                onChangeText={changeEnteredGoal} 
                value={enteredGoal} />
            <Button title="Add" 
                style={styles.addButton} 
                onPress = {props.goalAdded.bind(this, enteredGoal)} />
      </View>
    );
}

const styles = StyleSheet.create({
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

export default GoalInput;