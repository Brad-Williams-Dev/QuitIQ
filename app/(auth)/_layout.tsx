import { Stack, Redirect } from "expo-router";
import { View, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

console.log("✅ (auth)/_layout.tsx loaded");

export default function AuthLayout() {
  const { user, loading } = useAuth();
  console.log("🧠 AuthLayout state:", { user, loading });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Loading...</Text>
      </View>
    );
  }

  if (user) return <Redirect href="/(tabs)" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
