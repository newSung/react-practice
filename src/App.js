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
import NewDiary from "./components/NewDiary"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-practice" element={<Login />} />
        <Route path="/react-practice/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/newdiary" element={<NewDiary />} />
      </Routes>
    </Router>
  )
}

export default App;