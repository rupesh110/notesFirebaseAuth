import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../data/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { DataContext } from "../helper/DataContext";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();
  const { signedUser, setSignedUser } = useContext(DataContext);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setSignedUser(user);
        navigate("/home");
      } else {
        setSignedUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate, setSignedUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleRegister = () => {
    navigate("/signup");
  }

  return (
    <div className="Welcome">
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note-taking app</p>

        {signedUser ? (
          <p>Welcome, {signedUser.displayName}!</p>
        ) : (
          <p>Please sign in to continue.</p>
        )}

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign with Google</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
