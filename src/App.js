import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import reducer, { initialstate } from './reducer';
import { StateProvider } from './StateProvider';

function App() {
  return (
    <StateProvider initialstate={initialstate} reducer={reducer}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </StateProvider>
  );
}

export default App;
