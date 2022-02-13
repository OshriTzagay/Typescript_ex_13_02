import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Components/HomeCompo/Home';
import { Student } from './Components/StudentsCompo/Student';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home/>
    </div>
  );
}

export default App;
