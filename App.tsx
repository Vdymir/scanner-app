import { NavigationContainer } from "@react-navigation/native";
import { MainApp } from "./src/router/main-app";

export default function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}
