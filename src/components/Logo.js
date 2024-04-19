import { StyleSheet, Image, View } from 'react-native';

const LogoImage = require("../../assets/logo.svg");

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Image source={LogoImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});
