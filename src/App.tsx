import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Art } from './components/art';
import { Collab } from './components/collab';
import { Create } from './components/create';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
