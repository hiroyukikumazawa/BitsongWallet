import React, { useState, useEffect } from 'react';

import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, View, Button as Btn, Pressable } from 'react-native';

import Button from '../src/components/Button';


export default function CreateWallet() {
  const [showNimonic, setShowNimonic] = useState(false);
  const handleShowNimonic = () => {
    setShowNimonic(true);
  }
  const handleConfirmNimonic = () => {
    if (!showNimonic) {
      return false
    }
    router.push('/confirmNimonic');
  }
  const router = useRouter();
  const nemonicKeys = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12'];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', 'backgroundColor': '#14142e' }}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <View style={styles.nimonic}>
        <Text style={styles.nimonicTitle}>Your Recovery Pharse</Text>
        <View style={styles.nimonicContent}>
          <View style={styles.nimonicKeys}>
            {nemonicKeys.map((item, idx) => (
              <View style={styles.nimonicItem} key={`nimonic-item-${idx}`}>
                <Text style={styles.nimonicItemText}>{idx + 1}.</Text>
                <Text style={styles.nimonicItemText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={showNimonic ? { display: 'none' } : styles.nimonicWapper}>
            <Text style={styles.wrapperTitle}>Write it down!</Text>
            <Pressable style={styles.wrapperShow} onPress={handleShowNimonic}>SHOW</Pressable>
          </View>
          <Btn title='Copy' />
        </View>
      </View>
      <View style={styles.continueBtn}>
        <Button label={"Continue"} bg={true} clickEvent={handleConfirmNimonic} />
        <Button label={"Back"} clickEvent={() => router.push('/')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  continueBtn: {
    paddingVertical: "5%"
  },
  nimonic: {
    width: "100%",
    maxWidth: 450,
    padding: "5%",
    position: 'relative',
    marginTop: '10%'
  },
  nimonicTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  nimonicContent: {
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#f0f0f0',
    borderStyle: 'soild',
    borderWidth: 1,
    padding: 10
  },
  nimonicKeys: {
    position: 'relative',
    padding: 10,
    width: '100%',
    height: 277,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  nimonicItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 5
  },
  nimonicItemText: {
    fontSize: 16,
    color: '#ffffff'
  },
  nimonicWapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58587e'
  },
  wrapperTitle: {
    color: '#ffffff',
    fontSize: 20
  },
  wrapperShow: {
    position: 'absolute',
    bottom: 0,
    color: '#ffffff'
  }
});
