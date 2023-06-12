import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../data/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Call the login function with email and password
            await logInWithEmailAndPassword(auth, email, password);

            // Clear the form fields after successful login
            setEmail("");
            setPassword("");

            // Navigate to the home page
            navigate("/home");
        } catch (error) {
            console.log("Error logging in:", error);
        }
    }

    return (
        <div className="Login">
            <div className="lander">
                <h1>Login</h1>
                <p>A simple note taking app</p>

                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}
