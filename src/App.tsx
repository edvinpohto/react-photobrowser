import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import ImageGrid from './components/ImageGrid';
import Image from './components/Image';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ImageGrid />}/>
        <Route path="/:id" element={<Image />}/>
      </Routes>
    </>
  );
}

export default App;
