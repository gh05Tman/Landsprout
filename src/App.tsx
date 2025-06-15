import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./firebase";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const devMode = localStorage.getItem("devMode") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (devMode) {
      setLoading(false);
      setUser({} as User); // Fake user object for dev mode
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [devMode]);

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-green-700">Loading...</div>
      </div>
    );
  }

 return (
  <Routes>
    <Route path="/" element={<LandingPage />} /> 
    <Route path="/login" element={<AuthForm />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* Add more routes here, e.g., <Route path="/editor" element={<Editor />} /> */}
    <Route
      path="*"
      element={
        <div className="min-h-screen flex items-center justify-center bg-green-50">
          <div className="text-green-700">Page not found</div>
        </div>
      }
    />
  </Routes>
);
}

export default App;