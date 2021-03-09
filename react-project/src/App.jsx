import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import Router from './components/shared/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Instant/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
