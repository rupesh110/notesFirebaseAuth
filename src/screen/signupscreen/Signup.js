import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../data/Firebase";

import "./Signup.css";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Perform signup logic using the email and password values
            await registerWithEmailAndPassword(name, email, password);

            // Clear the form fields after signup
            setName("");
            setEmail("");
            setPassword("");

            // Check if the user is successfully registered
            const user = auth.currentUser;
            if (user) {
                // Navigate to the home page
                navigate("/home");
            } else {
                // Handle the case when the user is not registered
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error signing up:", error);
        }
    };

    return (
        <div className="Signup">
            <div className="lander">
                <h1>Signup</h1>
                <p>A simple note-taking app</p>

                <form>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button onClick={handleSignup}>Signup</button>
                </form>
            </div>
        </div>
    );
}
