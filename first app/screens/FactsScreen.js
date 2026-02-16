import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FactsScreen = () => {
  let fact1 = "The human brain uses about 20% of the body's energy.";
  const fact2 = "Octopuses have three hearts.";
  let fact3 = "Bananas are berries, but strawberries are not.";

  return (
    <View style={styles.container}>
      <Text style={styles.fact1}>{fact1}</Text>
      <Text style={styles.fact2}>{fact2}</Text>
      <Text style={styles.fact3}>{fact3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  fact1: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
  },
  fact2: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginBottom: 10,
  },
  fact3: {
    fontSize: 18,
    color: "purple",
    fontStyle: "italic",
  },
});

export default FactsScreen;
