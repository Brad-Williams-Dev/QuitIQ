import React, { createContext, useContext, useEffect, useState } from "react";

const CONTEXT_ID = "🚀 LIVE CONTEXT";

console.log("✅ Creating AuthContext:", CONTEXT_ID);

const AuthContext = createContext<{
  user: any;
  loading: boolean;
  login: (user: any) => void;
  logout: () => void;
}>({
  user: null,
  loading: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log("✅ AuthProvider component mounted:", CONTEXT_ID);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("⏳ Starting fake auth check...");
    const timer = setTimeout(() => {
      console.log("✅ Fake auth done — setting loading = false");
      setUser(null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, login: setUser, logout: () => setUser(null) }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("🧠 useAuth hooked into:", CONTEXT_ID, context);
  return context;
};
