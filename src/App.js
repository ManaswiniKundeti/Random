import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>Click on Add Person to add persons and on their respective tiles to delete them</li>
        </ul>
        <Persons />
      </div>
    );
  }
}

export default App;
