import React from 'react';
import logo from './logo.svg';
import { Button, Layout } from 'antd';
import './App.css';

import Home from './Home';
import OAuthCallback from './pages/oauth-callback';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback" component={OAuthCallback} />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}