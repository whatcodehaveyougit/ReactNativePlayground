import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Charles')

  const handleChange = () => {
    setName('Joe')
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your a</Text>
      </View>
      <View>
        <Text style={styles.header}>Hello {name}</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='eg 99'
          styles={styles.input}
        />
        <Button
          title='My Button'
          onPress={handleChange}
        />
      </View>
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
  header: {
    backgroundColor: 'green',
    color: 'white',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    margin: 10,
  }
});
