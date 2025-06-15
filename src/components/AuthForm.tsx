import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700" type="submit">
          {isRegister ? "Register" : "Sign In"}
        </button>
      </form>
      <button
        className="w-full mt-4 bg-white border border-green-600 text-green-700 py-2 rounded hover:bg-green-50 flex items-center justify-center gap-2"
        type="button"
        onClick={handleGoogleSignIn}
      >
        <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34.7 32.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3 15.6 3 8.1 8.7 6.3 14.7z"/><path fill="#FBBC05" d="M24 43c5.6 0 10.3-1.8 13.7-4.9l-6.3-5.2C29.7 34.7 27 35.5 24 35.5c-5.7 0-10.5-3.8-12.2-9.1l-6.6 5.1C8.1 39.3 15.6 45 24 45z"/><path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3C34.7 32.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.4 0 4.7.7 6.6 2l6.4-6.4C33.5 5.1 28.1 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"/></g></svg>
        Sign in with Google
      </button>
      <button
        className="mt-4 text-green-700 underline"
        onClick={() => setIsRegister(r => !r)}
      >
        {isRegister ? "Already have an account? Sign In" : "Need an account? Register"}
      </button>
      <button
        className="mt-4 text-xs text-gray-500 underline"
        type="button"
        onClick={() => {
          localStorage.setItem("devMode", "true");
          window.location.reload();
        }}
      >
        Enable Developer Mode (bypass auth)
      </button>
    </div>
  );
}