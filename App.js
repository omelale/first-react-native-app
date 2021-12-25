import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const addGoal = (goalTitle, deleteInputField) => {
        setGoals((stateOfGoals) => [...stateOfGoals, {key: Math.random().toString(), value: goalTitle}]);
        deleteInputField('');
    }
    const deleteAllGoals = () => {
        setGoals([]);
    }
    const removeSingleGoal = goalId => {
        setGoals((stateOfGoals) => {
            return stateOfGoals.filter((goal) => {
               return goal.key !== goalId;
            });
        });
    }
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.mainTitle}>This is the ToDo app!</Text>
            </View>
            <GoalInput onAddGoal={addGoal} onDeleteGoal={deleteAllGoals}/>
            <FlatList data={goals}
                      renderItem={itemData => <GoalItem id={itemData.item.key} deleteSingleGoal={removeSingleGoal}
                                                        title={itemData.item.value}/>}/>
        </View>);
}
const styles = StyleSheet.create({
    'mainContainer': {
        padding: 30
    }, 'mainTitle': {
        fontSize: 30, fontWeight: "700", alignItems: 'center', marginBottom: 20,
    },
});