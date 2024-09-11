// start by using npm run dev

"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/appbar";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import AuthForm from "./components/AuthForm";

export default function Home() {
  const [user, setUser] = useState(null);

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      if (!user) {
        console.log("incorrect credentials");
      }
    } catch (error) {
      console.error("Login Error: ", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error: ", error.message);
    }
  };

  return (
    <div>
      {!user ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <div>
          <>
            <ResponsiveAppBar />
            <Container maxWidth="12">
              <Typography
                variant="h1"
                color="initial"
                textAlign={"center"}
                marginTop={10}
              >
                {" "}
                Welcome to Karma-Organics
              </Typography>
            </Container>
          </>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
}
