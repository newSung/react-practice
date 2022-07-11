import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"
import Main from "./components/Main"
import Settings from "./components/Settings"
import Home from "./components/Home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-practice" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
