import { Stack, useRouter } from "expo-router"
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "../src/components/Button";

export default function Password() {
  const router = useRouter();

  const handleCreateWallet = () => {
    router.push('/home');
  }

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', 'backgroundColor': '#14142e', paddingHorizontal: '5%', gap: 50 }}>
      <Stack.Screen options={{
        title: 'Password',
        headerStyle: { backgroundColor: '#14142e', },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 15
        },
        headerTitle: "Password",
      }}
      ></Stack.Screen>
      <View style={styles.passwordPanel}>
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Type password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          placeholder="Type password again"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button label={"Continue"} filled={true} clickEvent={handleCreateWallet} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  passwordPanel: {
    gap: 5,
    maxWidth: 450,
    marginHorizontal: 'auto',
    width: '100%'
  }
})