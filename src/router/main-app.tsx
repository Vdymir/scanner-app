import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomeScreen, ScannerScreen } from "../screens";
import { COLOR } from "../styles/colors";

export type RootStackMainRouter = {
  Home: undefined;
  Scanner: undefined;
};

const Stack = createStackNavigator<RootStackMainRouter>();

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: COLOR.grey,
  },
};

export function MainApp() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scanner" component={ScannerScreen} />
    </Stack.Navigator>
  );
}
