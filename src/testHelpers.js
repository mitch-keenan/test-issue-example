import { ThemeConsumer, ThemeProvider } from "styled-components";
import { mount, shallow } from "enzyme";
import React from "react";
import theme from "./theme";

const shallowWithTheme = tree => {
  const context = shallow(<ThemeProvider theme={theme} />).instance();
  return shallow(tree, { context });
};

const mountWithTheme = tree => {
  // eslint-disable-next-line no-underscore-dangle
  ThemeConsumer._currentValue = theme;
  return mount(tree);
};

export { shallowWithTheme, mountWithTheme };
