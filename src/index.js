import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import NameLink from "./NameLink";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NameLink lastName={"Snape"} />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
