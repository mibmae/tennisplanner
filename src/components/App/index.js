// == Import npm
import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Rencontres from '../Rencontres';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Rencontres />
    </Router>
  </div>
);

// == Export
export default App;
