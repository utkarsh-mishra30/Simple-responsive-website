import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Randomvids from './components/Randomvids';
// import Navbuttons from './components/navbuttons';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HashRouter>
      <Switch>
        <Route exact path="/" component={Homepage}  />
        <Route exact path="/about" component={About}  />
        <Route exact path="/skills" component={Skills}  />
        <Route exact path="/randomvids" component={Randomvids}  />
      </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
