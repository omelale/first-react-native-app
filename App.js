import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.mainTitle}>This is the ToDo app!</Text>
            </View>
            <View style={styles.inputDiv}>
                <TextInput placeholder={'write a task'} style={styles.textinput}/>
                <Button
                    title='Add' style={styles.btn}
                />
            </View>
            <View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    'mainContainer': {
        padding: 30
    },
    'mainTitle': {
        fontSize: 30,
        fontWeight: "700",
        alignItems: 'center',
        marginBottom: 20,
    },
    'inputDiv': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    'textinput': {
        borderWidth: 3,
        borderColor: 'red',
        padding: 10,
        width: '80%'
    },
    'btn': {
        padding: 40,
        height: 40
    }
});