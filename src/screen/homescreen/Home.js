import React, {useContext} from "react";

import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../data/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { DataContext } from "../helper/DataContext";

import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    const { signedUser, setSignedUser } = useContext(DataContext);
    console.log(signedUser);
    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <div className="container">
            <div className="navbar">            
                <button onClick={handleLogout}>Logout</button>
            </div>   

            <div className="contentContainer">

            </div>
        </div>
    )
}