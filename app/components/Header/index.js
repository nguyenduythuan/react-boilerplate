import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavBar from '../Header/NavBar';
import HeaderLink from '../Header/HeadLink';
import urls from './urls';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: location.pathname
    }
  }
  clickA(path){
    this.setState({
      active: path
    })
  }
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" noWrap ml="40">
            Demo-react
          </Typography>
          <NavBar>
            {
              urls.map((url) => <HeaderLink id={this.state.active === url.path ? "active" : ""} to={url.path} key={url.id} onClick={() => this.clickA(url.path)}> {url.title} </HeaderLink>)
            }
          </NavBar>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
