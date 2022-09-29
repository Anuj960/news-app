import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,Switch,Route, 
} from "react-router-dom";
// aa0d09a6b0104f7a9f7541961dd133e3
export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="general"pageSize={6} country='in'category="general"/></Route>
          <Route exact path="/Business"><News key="buisness" pageSize={6} country='in'category="business"/></Route>
          <Route exact path="/Entertainment"><News key="entertainment"pageSize={6} country='in'category="entertainment"/></Route>
          <Route exact path="/General"><News key="general"pageSize={6} country='in'category="general"/></Route>
          <Route exact path="/Health"><News key="health"pageSize={6} country='in'category="health"/></Route>
          <Route exact path="/Sports"><News key="sports"pageSize={6} country='in'category="sport"/></Route>
          <Route exact path="/Science"><News key="science"pageSize={6} country='in'category="science"/></Route>
          <Route exact path="/Technology"><News key="technology"pageSize={6} country='in'category="technology"/></Route>
          
        </Switch>
        </Router>
      </div>
    )
  }
}

