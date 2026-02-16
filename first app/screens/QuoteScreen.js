import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuoteScreen = () => {
  let quote = "Success is not final, failure is not fatal.";
  const author = "Winston Churchill";

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.author}>- {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  quote: {
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QuoteScreen;
