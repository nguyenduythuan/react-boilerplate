import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  a#active {
    color: white;
    opacity: 0.7;
  }
  a#active:hover {
    background-color: #00000014;
    color: white;
  }
  header.MuiPaper-root.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-positionStatic.MuiAppBar-colorPrimary {
    background-color: #1976d2;
    min-height: 4rem;
    display: flex;
    justify-content: center;
  }
  .MuiTable-root {
    margin-top: 20px;
  }
  footer {
    background-color: #1976d2;
    text-align: center;
    padding: 40px;
    color: white;
    margin-top: 40px;
  }
`;

export default GlobalStyle;
