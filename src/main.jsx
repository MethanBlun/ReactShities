/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function ComponentA() {
  return <h2 className="text-2xl font-bold text-blue-500">Component A</h2>;
}

function ComponentB() {
  return <h2 className="text-2xl font-bold text-green-500">Component B</h2>;
}

function App() {
  const navigate = useNavigate();

  const goToComponentA = () => {
    navigate('/');
  };

  const goToComponentB = () => {
    navigate('/componentb');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Exemple avec React Router et Tailwind CSS</h1>
      <nav className="mb-4">
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={goToComponentA}>
          Afficher Component A
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={goToComponentB}>
          Afficher Component B
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/componentb" element={<ComponentB />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
