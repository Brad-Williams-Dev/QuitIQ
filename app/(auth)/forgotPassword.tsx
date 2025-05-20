import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSendRecoveryEmail = () => {
    // TODO: Hook up actual password recovery logic here
    console.log("Sending recovery email to:", email);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </Pressable>

      <Text style={styles.header}>Forgot password</Text>

      <View style={styles.card}>
        <Text style={styles.cardDescription}>
          Enter the email associated with your account and we will send you a
          recovery email to reset your password from there
        </Text>

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
            autoCapitalize="none"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendRecoveryEmail}
      >
        <Text style={styles.sendButtonText}>Send recovery email</Text>
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
  card: {
    backgroundColor: "#1f1d3a",
    borderRadius: 20,
    padding: 20,
  },
  cardDescription: {
    color: "#aaa",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: "#2a2942",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#a18bff",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: "auto",
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
});
