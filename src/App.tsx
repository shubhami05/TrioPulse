import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketing from './pages/Marketing';
import Media from './pages/Media';
import IT from './pages/IT';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing/*" element={<Marketing />} />
          <Route path="/media/*" element={<Media />} />
          <Route path="/it-services/*" element={<IT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;