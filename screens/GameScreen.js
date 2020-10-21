import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  // ...เพิ่มโค้ดกำหนด state...
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [rounds, setRounds] = useState(0);
  let confirmedOutput;

  if (selectedNumber === props.answer) {
    props.onGameOver(rounds);
  }

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber.toString()}</Text>
        </View>
        <Text>
          The answer is {selectedNumber < props.answer ? "greater" : "lower"}.
          Round: {rounds}
        </Text>
      </View>
    );
  }

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    setEnteredValue("");
  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    setSelectedNumber(parseInt(enteredValue));
    setConfirmed(true);
    setEnteredValue("");
    setRounds(rounds + 1);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={{ backgroundColor: Colors.accent, borderRadius: "5%" }}>
            <Button title="Reset" color={"white"} onPress={resetInputHandler} />
          </View>
          <View style={{ backgroundColor: Colors.primary, borderRadius: "5%" }}>
            <Button
              title="Confirm"
              color={"white"}
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  number: {
    color: Colors.primary,
    fontSize: 22,
  },
});

export default GameScreen;
