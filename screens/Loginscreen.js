import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  // import { useFonts } from "expo-font";
  
  const LoginScreen = () => {
    // const [loadedFont] = useFonts({
    //   Light: require("./assets/fonts/Inter_28pt-Light.ttf"),
    //   Regular: require("./assets/fonts/Inter_28pt-Regular.ttf"),
    //   Medium: require("./assets/fonts/Inter_28pt-Medium.ttf"),
    //   SemiBold: require("./assets/fonts/Inter_28pt-SemiBold.ttf"),
    //   Bold: require("./assets/fonts/Inter_28pt-Bold.ttf"),
    // });
  
    // if (!loadedFont) {
    //   return null;
    // }
  
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputFiled}>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter password"
            style={styles.input}
          />
        </View>
        <View style={[styles.inputFiled, { marginBottom: 32 }]}>
          <TextInput placeholder="Enter email" style={styles.input} />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    loginScreen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
    },
    title: {
      fontSize: 32,
      marginBottom: 32,
      // fontFamily: "Regular",
    },
    inputFiled: {
      flexDirection: "row",
      marginBottom: 20,
    },
    input: {
      backgroundColor: "#ddd",
      flex: 1,
      height: 60,
      borderRadius: 100,
      paddingHorizontal: 24,
      paddingVertical: 12,
      fontSize: 20,
    },
    actions: {
      flexDirection: "row",
    },
    loginBtn: {
      backgroundColor: "black",
      flex: 1,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
    loginText: {
      color: "white",
      fontSize: 24,
    },
  });