import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import './App.css'; // You can create this file for styling

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;