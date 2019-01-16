import React, { Component } from 'react';
import './App.css';
import Map from './components/map/Map.js';
import Header from './components/header/Header.js';
import Insta from './components/insta/Insta.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map/>
        <Insta/>
      </div>
    );
  }
}

export default App;
