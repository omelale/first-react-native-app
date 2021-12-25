import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = (props) => {
    const [userInput, setUserInput] = useState('');
    const handleUserInput = (textUserInput) => {
        setUserInput(textUserInput);
    }
    return (<Modal visible={props.opened} animationType='slide'>

        <View style={styles.inputDiv}>
            <TextInput placeholder={'write a task'}
                       style={styles.textinput}
                       value={userInput}
                       onChangeText={handleUserInput}
            />

            <View style={styles.inlineButtons}>
                <View style={styles.button}><Button
                    title='Add' style={styles.btn}
                    onPress={props.onAddGoal.bind(this, userInput, setUserInput)}
                /></View>
                <View style={styles.button}><Button
                    title='Cancel'
                    color='grey'
                    onPress={props.closeM}
                /></View>
            </View>
        </View>
        <View>
            <Button
                title='Delete all tasks'
                style={styles.deleteBtn}
                color='red'
                onPress={props.onDeleteGoal}
            />
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    'inputDiv': {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }, 'textinput': {
        borderWidth: 3, borderColor: 'red', padding: 10, width: '80%', marginBottom: 10
    }, 'button' : {
      width:'30%'
    },
    'btn': {
        padding: 40, height: 40
    }, 'deleteBtn': {
        padding: 40, height: 40
    }, 'closeBtn': {
        padding: 40, height: 40
    }, 'inlineButtons': {
        width:'60%', flexDirection:'row', alignItems: "center", justifyContent:'space-between'
    }
})

export default GoalInput