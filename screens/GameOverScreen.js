import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Correct Number was: {props.answer}</Text>
      <View style={{backgroundColor: Colors.primary, borderRadius: "5%", marginTop: 10}}>
        <Button
          title="New Game"
          color={"white"}
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
