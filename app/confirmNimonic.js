import { Stack, useRouter } from "expo-router"
import { View, StyleSheet } from "react-native"
import React, { useState } from "react";

import { RadioButton, Text } from 'react-native-paper';
import Button from "../src/components/Button";


export default function ConfirmNimonic() {

  const router = useRouter();

  const nimonicList = ["test1", "test2", "test3", "test4", "test5"];
  const [nimonic, setNimonic] = useState();

  const handleComplteNimonic = () => {
    if (nimonic !== 'test1') {
      return false;
    }

    router.push('/password')
  }

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-between', 'backgroundColor': '#14142e', paddingHorizontal: '5%' }}>
      <Stack.Screen options={{
        title: 'Confirm Nimonic',
        headerStyle: { backgroundColor: '#14142e', },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 15
        },
        headerTitle: "Confirm Recovery pharse",
      }}
      ></Stack.Screen>
      <View>
        <Text style={styles.nomonicTitle}>What is 8th word in your private pharse?</Text>
        <RadioButton.Group onValueChange={val => setNimonic(val)} value={nimonic} >
          {nimonicList.map((item, idx) => (
            <View key={`nomonic-confirm-${idx}`} style={styles.nimonicItem}>

              <RadioButton color="#ffffff" uncheckedColor="#ffffff" value={item} />
              <Text style={styles.nimonicItemColor} onPress={() => setNimonic(item)}>{item}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>
      <View style={styles.nimonicComplete}>
        <Button label="Continue" filled={true} clickEvent={handleComplteNimonic}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nomonicTitle: {
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 30
  },
  nimonicItem: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 5,
    maxWidth: 450,
    margin: 'auto'
  },
  nimonicItemColor: {
    color: '#ffffff',
    fontSize: 20,
    width: '100%',
    textAlign: 'right'
  },
  nimonicComplete: {
    alignItems: 'center',
    marginBottom: '5%'
  }
})