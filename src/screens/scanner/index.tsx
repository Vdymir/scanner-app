import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner, BarCodeEvent } from "expo-barcode-scanner";
import ModalConfirmation from "../../components/modal-confirmation";

export function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);
  const [barCode, setBarCode] = useState("");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: BarCodeEvent) => {
    setBarCode(data);
    setScanned(true);
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No tenemos permiso para usar la cámara</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <ModalConfirmation setScanned={setScanned} barCode={barCode} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
});
