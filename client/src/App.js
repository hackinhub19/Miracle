import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";

import Home from './components/Home'
import PoliceHome from './components/PoliceHome';
import NewFIR from './components/NewFIR';
import ViewCase from './components/ViewCase';
import Forensics from './components/CrimeDetails/Forensics'

import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/home" />
            <Route> 
              <Route path = "police" component = {PoliceHome}/>
              <Route path = "newfir" component = {NewFIR}/>
              <Route path = "viewcase/:caseId" component = {ViewCase}/>
              <Route path = "home" component = {Home}></Route>
              <Route path = "crimedata/forensics/:caseId/" component = {Forensics}/>      
            </Route>                 
        </Router>
    );
  }
}
export default App;
