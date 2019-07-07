import React from 'react';
import { Switch, Route } from 'react-router';

import GlobalStyle from '../../global-styles'
import Header from '../../components/Header';
import Form from '../Form';
import HomePage from '../HomePage'
import Footer from '../../components/Footer';
import Article from '../../components/Article';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Article>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Form} />
          </Switch>
        </Article>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}
