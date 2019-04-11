import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import List from "./components/List";
import Africa from "./components/Africa";
import Americas from "./components/Americas";
import Asia from "./components/Asia";
import Oceania from "./components/Oceania";
import Europe from "./components/Europe";

class App extends Component {


  render() {
    return (
      <div className="App">
          <Router>
              <h2>Welcome to CodeCrew Earth</h2>
              <Link className={'linkSpace'} to={'/'}>Home</Link>
              <Link className={'linkSpace'} to={'/list/africa'}>Africa</Link>
              <Link className={'linkSpace'} to={'/list/americas'}>America</Link>
              <Link className={'linkSpace'} to={'/list/asia'}>Asia</Link>
              <Link className={'linkSpace'} to={'/list/europe'}>Europe</Link>
              <Link className={'linkSpace'} to={'/list/oceania'}>Oceania</Link>
              <h2>Click one of the regions to see all of the countries listed in it</h2>
              <Route path={'/list/africa'} component={Africa}/>
              <Route path={'/list/americas'} component={Americas}/>
              <Route path={'/list/asia'} component={Asia}/>
              <Route path={'/list/oceania'} component={Oceania}/>
              <Route path={'/list/europe'} component={Europe}/>
          </Router>
      </div>
    );
  }
}

export default App;
