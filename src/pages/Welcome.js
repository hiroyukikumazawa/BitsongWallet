import { StyleSheet, View } from 'react-native';
import Button from "../components/Button";
import Logo from "../components/Logo";

export default function Welcome() {
  return (
    <View style={styles.topPage}>
      <Logo />
      <View style={styles.btnGroup}>
        <Button label={"Create Wallet"} bg={true} />
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
