import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ResultScreen({ route }) {
  const { baseNumber, score } = route.params;
  const message = score >= 10 ? `You've won! baseNumber was ${baseNumber} and score ${score}` : `You've lost. baseNumber was ${baseNumber} and score ${score}`;
  
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {score >= 10 && (
        <Image source={require('../assets/winner.png')} style={styles.image} />
      )}
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
  message: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});
