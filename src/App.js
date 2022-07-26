import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Infermiers from './pages/Infermiers/Infermiers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        
          <Navbar/>
        
      </Router>
      </>
  );
}

export default App;
