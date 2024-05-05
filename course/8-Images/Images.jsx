import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const img = require("../../assets/icon.png");
const externalImage = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function Images() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Image source={img} style={{ width: 200, height: 200 }} />
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      /> */}
      <ImageBackground style={{ flex: 1, alignItems: "center", justifyContent: "center" }} resizeMode="cover" source={externalImage}>
        <Text style={{ fontSize: 20, fontWeight: "bold", backgroundColor: "gray", padding: 20 }}>INSIDE</Text>
      </ImageBackground>
    </View>
  );
}
