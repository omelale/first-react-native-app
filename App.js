import React, {useState} from "react";
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalState, setModalState] = useState(false);
    const addGoal = (goalTitle, deleteInputField) => {
        if(goalTitle.length === 0){
            return;
        }
        setGoals((stateOfGoals) => [...stateOfGoals, {key: Math.random().toString(), value: goalTitle}]);
        deleteInputField('');
        closeModal();
    }
    const openModal = () => {
        setModalState(true);
    }
    const closeModal = () => {
        setModalState(false);
    }
    const deleteAllGoals = () => {
        setGoals([]);
        closeModal();
    }
    const removeSingleGoal = goalId => {
        setGoals((stateOfGoals) => {
            return stateOfGoals.filter((goal) => {
                return goal.key !== goalId;
            });
        });
    }
    return (<View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
            <Text style={styles.mainTitle}>This is the ToDo app!</Text>

            <Button title='Add new goal' onPress={() => {
                openModal(true)
            }}/>
        </View>
        <GoalInput opened={modalState} onAddGoal={addGoal} closeM={closeModal} onDeleteGoal={deleteAllGoals}/>
        <FlatList data={goals}
                  renderItem={itemData => <GoalItem id={itemData.item.key} deleteSingleGoal={removeSingleGoal}
                                                    title={itemData.item.value}/>}/>
    </View>);
}
const styles = StyleSheet.create({
    'mainContainer': {
        padding: 30,
        paddingTop:70
    }, 'secondContainer': {marginBottom: 20}, 'mainTitle': {
        fontSize: 30, fontWeight: "700", alignItems: 'center', marginBottom: 20,
    },
});