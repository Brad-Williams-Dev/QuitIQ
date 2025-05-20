import { Tabs, Redirect } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { View, Text } from "react-native";

export default function TabLayout() {
  const { user, loading } = useAuth();
  console.log("[TabLayout]", { user, loading });

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
  if (!user) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
    </Tabs>
  );
}
