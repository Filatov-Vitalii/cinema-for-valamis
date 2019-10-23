import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Screen from './screen/screen.js';
import Seats from './seats/seats.js';

const App = () => {
  return (
    <div className="App">
      <img src="https://img.icons8.com/clouds/100/000000/react.png" className = 'icon' />
      <Route path = '/' component={Screen} />
      <Route path = '/' component={Seats} />
    </div>
  );
}


export default App;
