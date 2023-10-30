import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "../../styles/colors";

interface Props {
  name: string;
  onDelete: () => void;
}

export function Card({ name, onDelete }: Props) {
  return (
    <View style={styles.main}>
      <Text style={styles.name}>{name}</Text>
      <Pressable onPress={onDelete}>
        <Ionicons name="trash-outline" color="red" size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLOR.whiteLite,
    borderRadius: 5,
    padding: 12,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 10
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
});
