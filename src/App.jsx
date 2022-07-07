import React,{useState} from 'react';
import './app.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';




export default function App() {
 
  return(
   
    <div>
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
         
      </Routes>
        </BrowserRouter>
     
    </div>
   
  )
}
