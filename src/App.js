import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import HelpLine from './components/helpline';
import Summary from './components/summary';
import Cluster from './components/cluster';
import Contribute from './components/contribute';

const history = require('history').createBrowserHistory;

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <Route render={({location}) => (
          <div className="Almighty-Router">
            <Navbar />
            <Route exact path="/" render={() => <Redirect to="/" />} />
            <Switch location={location}>
              <Route exact path="/" render={(props) => <Home {...props}/>} />
              <Route exact path="/links" render={(props) => <Links {...props}/>} />
              <Route exact path="/helpline" render={(props) => <HelpLine {...props}/>} />
              <Route exact path="/summary" render={(props) => <Summary {...props}/>} />
              <Route exact path="/networkmap" render={(props) => <Cluster {...props}/>} />
              <Route exact path="/contribute" render={(props) => <Contribute {...props}/>} />
            </Switch>
          </div>
        )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        <img src="/icon.png" alt="logo"/>
        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://github.com/covid19india">Primary Source</a> - <a href="https://www.instagram.com/thedeadauthor/">DMMC Maintainer</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
