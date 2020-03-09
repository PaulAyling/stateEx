import React from 'react';
import logo from './logo.svg';
import './App.scss';
import M from 'materialize-css';
import Home from './components/home'



function App() {
  return (
    <div className="App">
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">Pauls App</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>


    <Home/>
        
     
    </div>
  );
}

export default App;
