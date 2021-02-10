import React from 'react';
import { StyleSheet, Text } from 'react-native';

const GoalItem = (props) => {
    return (<Text style={styles.goalText}>
    {props.goal} 
   </Text>);
}

const styles = StyleSheet.create({
    goalText: {
        marginVertical: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: 'cyan'
    }
});

export default GoalItem;