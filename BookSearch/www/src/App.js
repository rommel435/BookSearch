import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Finder</h1>
        </header>
        <li><a href="public/index.html">next</a></li>

      </div>
    );
      
  }
}

export default App;
