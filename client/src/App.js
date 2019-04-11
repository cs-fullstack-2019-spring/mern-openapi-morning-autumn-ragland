import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import List from "./components/List";

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
              <Route path={'/list/:id'} component={List}/>
          </Router>

      </div>
    );
  }
}

export default App;
