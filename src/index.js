import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import './index.css';
import {Header} from './components/Header';
// Import routing components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header title="Welcome to Tabs"/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
