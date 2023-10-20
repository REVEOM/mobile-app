import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MY APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade8f4',
    _fontSize: 60,
    get fontSize() {
      return this._fontSize;
    },
    set fontSize(value) {
      this._fontSize = value;
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
});
