import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
});

export default MenuScreen;