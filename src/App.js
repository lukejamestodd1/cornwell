import React, { Component } from 'react';
import './App.css';
import Map from './components/map/Map.js';
import Header from './components/header/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map/>
      </div>
    );
  }
}

export default App;
