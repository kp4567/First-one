import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Border from './components/Border';
import Prefooter from './components/Prefooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Border />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
