import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
