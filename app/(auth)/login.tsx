import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Implement actual login logic here
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </Pressable>

      <Text style={styles.header}>Log in</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your email</Text>
        <View style={styles.inputWrapper}>
          <FontAwesome name="at" size={16} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Enter your email here"
            placeholderTextColor="#888"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={16} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#888"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? "eye-off" : "eye"}
              size={20}
              color="#aaa"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.linkWrapper}>
          <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
            <Text style={styles.forgotPassword}>Dont have an account?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/forgotPassword")}
          >
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={apple} style={{ width: 17, height: 17 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={google} style={{ width: 17, height: 17 }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151329",
    padding: 24,
    paddingTop: 80,
    paddingBottom: 54,
  },
  linkWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    top: 80,
    left: 20,
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#1f1d3a",
  },
  header: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    marginBottom: 52,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: "#1f1d3a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  forgotPassword: {
    color: "#ccc",
    textAlign: "right",
    fontSize: 14,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 24,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  socialButton: {
    flex: 1,
    backgroundColor: "#1f1d3a",
    padding: 14,
    marginHorizontal: 6,
    borderRadius: 20,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#a18bff",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "auto",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
});
