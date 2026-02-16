import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FruitScreen = () => {
  let fruit1 = "Apple";
  const fruit2 = "Banana";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fruit 1: {fruit1}</Text>
      <Text style={styles.text}>Fruit 2: {fruit2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default FruitScreen;
