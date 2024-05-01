import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Text_Component() {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText =
    "This is not really a bird nest. This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.";

  const onpressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onpressTitle}>
          {titleText} {"\n"}
          {"\n"}
        </Text>
      </Text>
      <Text numberOfLines={3} ellipsizeMode="clip">
        {bodyText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
