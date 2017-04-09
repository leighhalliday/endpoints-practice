import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Week 1</h1>
        <ul>
          <li><Link to="/day1">Day 1</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
