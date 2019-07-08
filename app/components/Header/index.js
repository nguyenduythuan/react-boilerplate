import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import NavBar from './NavBar';
import HeaderLink from './HeadLink';
import urls from './urls';
import NavTitle from './NavTitle';
import Nav from './Nav';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: location.pathname,
    };
  }

  clickA(path) {
    this.setState({
      active: path,
    });
  }

  render() {
    return (
      <AppBar position="static" color="primary">
        <Nav>
          <NavTitle>
            <Typography variant="h5" noWrap>
              Demo-react
            </Typography>
          </NavTitle>
          <NavBar>
            {urls.map(url => (
              <HeaderLink
                id={this.state.active === url.path ? 'active' : ''}
                to={url.path}
                key={url.id}
                onClick={() => this.clickA(url.path)}
              >
                {' '}
                {url.title}{' '}
              </HeaderLink>
            ))}
          </NavBar>
        </Nav>
      </AppBar>
    );
  }
}

export default Header;
