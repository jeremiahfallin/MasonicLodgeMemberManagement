import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  green: "#325B3E",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1500px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: #325b3e;
  color: ${props => props.theme.lightgrey};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
@font-face {
  font-family: 'Muli', sans-serif;
    src: url('/static/Muli.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
}
html {
    box-sizing: border-box;
    font-size: 14px;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Muli', sans-serif;
    background-color: ${theme.green};
}
a {
    text-decoration: none;
    color: ${theme.lightgrey};
}
  button {  font-family: 'Muli', sans-serif; }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
