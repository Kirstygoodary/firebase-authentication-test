import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApiKeys from "./constants/ApiKeys";
import * as firebase from "firebase";

export default function App() {
  // Initializing firebase. If firebase has already been initialized then do not re-initialize.
  // Else initialize firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.firebaseConfig);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
