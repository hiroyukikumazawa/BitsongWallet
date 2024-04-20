import { StyleSheet, View, Pressable, Text } from 'react-native';


export default function Button({ label, bg = false, clickEvent }) {
  return (
    <View style={bg ? [styles.buttonContainer, styles.backgroundBtn] : styles.buttonContainer}>
      <Pressable style={styles.button} onPress={clickEvent}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 7,
    marginVertical: 5,
    borderColor: '#ff005c',
    borderWidth: 1,
    borderRadius: 10,
  },
  backgroundBtn: {
    backgroundColor: '#ff005c'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
  },
});
