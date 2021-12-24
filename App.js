import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';

export default function App() {
    const [userInput, setUserInput] = useState('');
    const [goals, setGoals] = useState([]);
    const handleUserInput = (textUserInput) => {
        setUserInput(textUserInput);
    }
    const addGoal = () => {
        setGoals((stateOfGoals) => [...stateOfGoals, userInput]);
        // setUserInput('');
    }
    const deleteAllGoals = () => {
        setGoals([]);
    }
    return (<View style={styles.mainContainer}>
        <View>
            <Text style={styles.mainTitle}>This is the ToDo app!</Text>
        </View>
        <View style={styles.inputDiv}>
            <TextInput placeholder={'write a task'}
                       style={styles.textinput}
                       value={userInput}
                       onChangeText={handleUserInput}
            />
            <Button
                title='Add' style={styles.btn}
                onPress={addGoal}
            />
        </View>
        <View>
            <Button
                title='Delete All'
                style={styles.deleteBtn}
                color='red'
                onPress={deleteAllGoals}
            />
        </View>
        <FlatList data={goals} renderItem={ itemData => <View style={styles.listComponent}><Text>{itemData.item}</Text></View> } />
    </View>);
}
const styles = StyleSheet.create({
    'mainContainer': {
        padding: 30
    }, 'mainTitle': {
        fontSize: 30, fontWeight: "700", alignItems: 'center', marginBottom: 20,
    }, 'inputDiv': {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    }, 'textinput': {
        borderWidth: 3, borderColor: 'red', padding: 10, width: '80%'
    }, 'btn': {
        padding: 40, height: 40
    }, 'deleteBtn': {
        padding: 40, height: 40
    }, 'listComponent': {
        padding: 10, backgroundColor : '#ccc', marginBottom:10
    }
});