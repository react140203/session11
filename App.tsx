import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DrugListScreen from "./screens/DrugListScreen";
import DrugStoreScreen from "./screens/DrugStoreScreen";
import DrugDetailScreen from "./screens/DrugDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DrugList" component={DrugListScreen} />
        <Stack.Screen name="DrugStore" component={DrugStoreScreen} />
        <Stack.Screen name="DrugDetail" component={DrugDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
