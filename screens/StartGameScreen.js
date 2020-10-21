import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <View style={{backgroundColor: Colors.primary, borderRadius: "5%", marginTop: 10}}>
        <Button
          title="START GAME"
          color={"white"}
          onPress={(correctNumber) => {
            // ...เพิ่มโค้ด...
            correctNumber = Math.floor(Math.random() * 100);
            console.log(correctNumber);
            props.onStartGame(correctNumber);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
