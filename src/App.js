import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './screen/welcomscreen/Welcome';
import Login from './screen/loginscreen/Login';
import './App.css';
import Home from './screen/homescreen/Home';
import Signup from './screen/signupscreen/Signup';

import { DataContextProvider } from './screen/helper/DataContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataContextProvider>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
