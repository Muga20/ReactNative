import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, SafeAreaView ,Image  } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text style={styles.hello}>
        Changes you make will automatically reload.
      </Text>

      <Button title="Click me" onPress={() => alert("Hello World")} />
      <StatusBar style="auto" />

   

      <Image source={require("./assets/icon.png")} style={{ width: 40, height: 40 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: "red",
    fontSize: 20,
    backgroundColor: "yellow",
    height: 50,
  },
  button: {
    color: "red",
    fontSize: 20,
    backgroundColor: "yellow",
    height: 50,
  },
});
