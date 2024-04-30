import React from "react";
import { Text, View } from "react-native";

export default function View_Component() {
  return (
    <View
      style={{
        flexDirection: "row",

        padding: 20,
        marginTop: 30,
        backgroundColor: "gray",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3, height: 100 }}></View>
      <View style={{ backgroundColor: "red", flex: 0.5, height: 100 }}></View>
      <Text style={{ marginStart: 20 }}>Hello world</Text>
    </View>
  );
}
