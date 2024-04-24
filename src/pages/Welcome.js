import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useRouter, Stack } from 'expo-router';

import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'

import { useWeb3Modal } from '@web3modal/wagmi-react-native'

const projectId = '714c3baa4d37a50d02c425860048927d'

const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'bitsongwallet://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true
})


export default function Welcome() {
  const router = useRouter();
  const { open } = useWeb3Modal()

  return (

    <View style={styles.topPage}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <Logo />
      <View style={styles.btnGroup}>
        <Button label={"Create Wallet"} filled={true} clickEvent={() => router.push('/createWallet')} />
        <Button label={"Connect Wallet"} clickEvent={() => open()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnGroup: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  topPage: {
    gap: 50
  },
});
