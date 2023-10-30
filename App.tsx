import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MainApp } from "./src/router/main-app";
import { ListBarCodeProvider } from "./src/context";

export default function App() {
  return (
    <NavigationContainer>
      <ListBarCodeProvider>
        <MainApp />
      </ListBarCodeProvider>
    </NavigationContainer>
  );
}
