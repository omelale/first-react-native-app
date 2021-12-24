import React from "react";
import {StyleSheet, Text, View} from "react-native";

const GoalItem = (props) => {
    return <View style={styles.listComponent}><Text>{props.title}</Text></View>
}


const styles = StyleSheet.create({
    'listComponent': {
        padding: 10, backgroundColor: '#ccc', marginBottom: 10
    }
})

export default GoalItem