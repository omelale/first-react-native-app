import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const GoalItem = (props) => {
    return <TouchableOpacity activeOpacity={0.75} onPress={props.deleteSingleGoal}><View style={styles.listComponent}><Text>{props.title}</Text></View></TouchableOpacity>
}

const styles = StyleSheet.create({
    'listComponent': {
        padding: 10, backgroundColor: '#ccc', marginBottom: 10
    }
})

export default GoalItem