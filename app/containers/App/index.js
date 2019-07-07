import React from 'react';
import { Switch, Route } from 'react-router';

import GlobalStyle from '../../global-styles'
import Header from '../../components/Header';
import Form from '../Form';
import HomePage from '../HomePage'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Form} />
        </Switch>
        <GlobalStyle />
      </div>
  );
  }
}
