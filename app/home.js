import { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

import { BitsongClient } from '@bitsongjs/client';
import { QueryClientImpl as BankQueryClientImpl, QueryAllBalancesRequest } from '@bitsongjs/client/dist/codec/cosmos/bank/v1beta1/query';
import { lastValueFrom, switchMap } from 'rxjs';
import OfflineSigner from '@cosmjs/proto-signing';

export default function Home() {
  const [price, setPrice] = useState(0);
  const DECIMAL = 1000000;

  useEffect(() => {
    const fetchPriceData = async () => {
      const modules = {
        bank: BankQueryClientImpl,
      }
      const api = new BitsongClient({
        connection: {
          type: 'tendermint',
          endpoints: ['https://rpc.bitsong.forbole.com:443'],
          signer: OfflineSigner
        },
      }, modules);
      const balancesResponse = await lastValueFrom(
        api.query.pipe(
          switchMap(query =>
            query.bank.AllBalances({
              $type: QueryAllBalancesRequest.$type,
              address: "bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2",
            }),
          ),
        ),
      );
      console.log(balancesResponse);
      setPrice(parseInt(balancesResponse.balances.find(val => val.denom === "ubtsg")?.amount) || 0)

    }
    fetchPriceData();
  }, [])
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
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  priceText: {
    color: '#ffffff',
    fontSize: 30
  }
})