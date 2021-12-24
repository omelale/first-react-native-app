import React, {useState} from "react";
import {Button, TextInput, View, StyleSheet} from "react-native";

const GoalInput = (props) => {
    const [userInput, setUserInput] = useState('');
    const handleUserInput = (textUserInput) => {
        setUserInput(textUserInput);
    }
    return <View>
        <View style={styles.inputDiv}>
            <TextInput placeholder={'write a task'}
                       style={styles.textinput}
                       value={userInput}
                       onChangeText={handleUserInput}
            />
            <Button
                title='Add' style={styles.btn}
                onPress={props.onAddGoal.bind(this, userInput, setUserInput)}
            />
        </View>
        <View>
            <Button
                title='Delete All'
                style={styles.deleteBtn}
                color='red'
                onPress={props.onDeleteGoal}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    'inputDiv': {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    }, 'textinput': {
        borderWidth: 3, borderColor: 'red', padding: 10, width: '80%'
    }, 'btn': {
        padding: 40, height: 40
    }, 'deleteBtn': {
        padding: 40, height: 40
    }
})

export default GoalInput