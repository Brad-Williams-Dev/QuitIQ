import { Slot } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { View, Text } from "react-native";

console.log("✅ _app.tsx loaded!");

export default function App() {
  return (
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: "#111", paddingTop: 40 }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          👋 Inside AuthProvider!
        </Text>
        <Slot />
      </View>
    </AuthProvider>
  );
}
