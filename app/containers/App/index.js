import React from 'react';
import { Switch, Route } from 'react-router';
import Container from '@material-ui/core/Container';

import GlobalStyle from '../../global-styles'
import Header from '../../components/Header';
import Form from '../Form';
import HomePage from '../HomePage'
import Section from '../../components/Section';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Section>
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contact" component={Form} />
            </Switch>
          </Container>
        </Section>
        <GlobalStyle />
      </div>
  );
  }
}
