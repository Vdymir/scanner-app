import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { ListBarCodeContext } from "../../context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackMainRouter } from "../../router/main-app";
import { COLOR } from "../../styles/colors";

interface Props {
  setScanned: React.Dispatch<React.SetStateAction<boolean>>;
  barCode: string;
}

export default function ModalConfirmation({ setScanned, barCode }: Props) {
  const [nameCode, setNameCode] = React.useState("");
  const { addNewBarCode, listBarCode } = React.useContext(ListBarCodeContext);
  const { navigate } = useNavigation<NavigationProp<RootStackMainRouter>>();

  const handleSave = () => {
    const hasThisCode = listBarCode.find((code) => code.id === barCode);
    if (hasThisCode) {
      alert(`Este código de barra ya existe con el nombre ${hasThisCode.name}`);
      return;
    }
    addNewBarCode({
      name: nameCode,
      id: barCode,
    });
    setScanned(false);
    navigate("Home");
  };

  const handleCancel = () => {
    setScanned(false);
    navigate("Home");
  };

  return (
    <Modal animationType="fade" transparent={true} visible>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Escaneado con éxito!</Text>
          <View style={styles.inputContainer}>
            <Text>Nombre:</Text>
            <TextInput
              value={nameCode}
              onChangeText={setNameCode}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleSave}>
              <Text style={styles.textSave}>Guardar</Text>
            </Pressable>
            <Pressable onPress={handleCancel}>
              <Text style={styles.textCancelar}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    width: "80%",
    gap: 10,
    alignItems: "center",
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textSave: {
    color: COLOR.green,
    fontWeight: "bold",
    textAlign: "center",
  },
  textCancelar: {
    color: COLOR.red,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  inputContainer: {
    alignContent: "center",
    gap: 10,
    width: "100%",
  },
  input: {
    borderColor: COLOR.black,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
});
