import {
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { ListBarCodeContext } from "../../context";
import { FlatList } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackMainRouter } from "../../router/main-app";
import { Button, Card } from "../../components";

export function HomeScreen() {
  const { listBarCode, deleteBarCode } = React.useContext(ListBarCodeContext);
  const { navigate } = useNavigation<NavigationProp<RootStackMainRouter>>();

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.title}>Scanner App</Text>
      <View style={styles.container}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <FlatList
            data={listBarCode}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card name={item.name} onDelete={() => deleteBarCode(item.id)} />
            )}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button title="add" onPress={() => navigate("Scanner")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
