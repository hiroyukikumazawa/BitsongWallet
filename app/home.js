import { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
  const [price, setPrice] = useState(0);
  const DECIMAL = 1000000;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', 'backgroundColor': '#14142e' }}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <View style={styles.btsgPrice}>
        <Text style={styles.priceText}>${price / DECIMAL}</Text>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btsgPrice: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  priceText: {
    color: '#ffffff',
    fontSize: 30
  }
})