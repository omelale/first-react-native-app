import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {useState} from "react";

export default function App() {
  const [text, editText] = useState('This is the initial value of the text')
  return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>{text}</Text>
        <View style={styles.separator} />
        <Button
            title="Click me"
            color= '#2f299e'
            onPress = { () => editText('Yes, the text changed!') }
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
