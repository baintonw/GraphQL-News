import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'

import CreateLink from './CreateLink'
import LinkList from './LinkList.js'
import Login from './Login'
import Search from './Search'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/new/1' />} />
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/top' component={LinkList} />
          <Route exact path='/new/:page' component={LinkList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
