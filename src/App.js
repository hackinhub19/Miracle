import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home'
import PoliceHome from './components/PoliceHome';
import NewFIR from './components/NewFIR';
import ViewCase from './components/ViewCase';
import Forensics from './components/CrimeDetails/Forensics'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/police" component = {PoliceHome}/>
        <Route path = "/newfir" component = {NewFIR}/>
        <Route path = "/viewcase/:caseId" component = {ViewCase}/>
        <Route path = "/crimedata/forensics/:caseId/" component = {Forensics}/>
      </Router>
    </div>
  );
}

export default App;
