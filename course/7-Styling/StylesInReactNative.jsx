import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StylesInReactNative() {
  return (
    <View style={styles.viewStyle}>
      <Text style={[styles.textStyle, styles.mainStyle]}>Hello world</Text>
      <Text style={[styles.mainStyle, styles.textTwoStyle]}>Welcome to our react native course</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  mainStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textStyle: {
    marginBottom: 10,
    fontWeight: "400",
  },

  textTwoStyle: {
    marginTop: 30,
    backgroundColor: "gray",
    padding: 4,
    color: "white",
  },
});
