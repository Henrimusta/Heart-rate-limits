import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [hrLow, setHrLow] = useState('');
  const [hrHigh, setHrHigh] = useState('');

  const calculate = () => {
    const highHR = (220 - age) * 0.85
    const lowHR = (220 - age) * 0.65
    setHrLow(lowHR.toFixed(0))
    setHrHigh(highHR.toFixed(0))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        keyboardType='decimal-pad'
        value={age}
        onChangeText={text =>
          setAge(text)
        }
      />
      <Text style={styles.field}>HR limits</Text>
      <Text style={styles.field}>{hrLow} - {hrHigh}</Text>
      <Button onPress={calculate} title="Calculate" />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
  },
});
