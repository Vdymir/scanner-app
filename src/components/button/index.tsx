import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { COLOR } from "../../styles/colors";

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}

export function Button({ onPress, title }: Props) {
  return (
    <TouchableOpacity style={styles.main} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    width: 50,
    height: 50,
    backgroundColor: COLOR.pastel,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.37,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
