import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Loginscreen";
import HomeScreen from "./screens/Homescreen";

const Stack = createStackNavigator();

const App = () => {
  console.log("App Screen");


  // if (!loadedFont && !error) {
  //   return null;
  // }

  return (
    <View style={style.app}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  app: {
    flex: 1,
  },
}); 