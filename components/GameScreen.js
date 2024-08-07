import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameScreen({ navigation }) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [score, setScore] = useState(0);

  const handleGuess = (direction) => {
    const nextNumber = Math.floor(Math.random() * 100);
    const correct = (direction === 'higher' && nextNumber > number) || (direction === 'lower' && nextNumber < number);
    if (correct) {
      setScore(score + 1);
    } else {
      navigation.navigate('Result', { baseNumber: number, score });
    }
    setNumber(nextNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starting: {number}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Higher" onPress={() => handleGuess('higher')} color="green" />
        <Button title="Lower" onPress={() => handleGuess('lower')} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
