import { StyleSheet, View } from 'react-native';
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useRouter, Stack } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  return (

    <View style={styles.topPage}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <Logo />
      <View style={styles.btnGroup}>
        <Button label={"Create Wallet"} bg={true} clickEvent={() => router.push('/createWallet')} />
        <Button label={"Restore Wallet"} />
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
