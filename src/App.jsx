import React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';




export default function App() {
  return(
    <div className="App ">
    <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
         
      </Routes>
    </div>
  )
}
