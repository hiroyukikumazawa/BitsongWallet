import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, filled = false, clickEvent }) {
  return (
    <View style={filled ? [styles.buttonContainer, styles.backgroundBtn] : styles.buttonContainer}>
      <Pressable style={styles.button} onPress={clickEvent}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    borderColor: '#ff005c',
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 40
  },
  backgroundBtn: {
    backgroundColor: '#ff005c'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
  },
});
