import React from "react";
import { def } from "bdd-lazy-var/global";
import { mount, shallow } from "enzyme";
import { shallowWithTheme, mountWithTheme } from "../testHelpers";
import NameLink from "../NameLink";

const NAME = "Snape";

def("rendered", () => shallowWithTheme(<NameLink lastName={NAME} />));

describe("NameLink", () => {
  describe("when there is a name provided", () => {
    it("renders a name link component", () => {
      expect($rendered).toExist();
    });

    it("renders the correct text", () => {
      // eslint-disable-next-line no-undef
      expect($rendered.text()).toBe(`I'm Professor ${NAME}`);
    });
  });

  describe("when no name is provided", () => {
    def("rendered", () => shallowWithTheme(<NameLink lastName={null} />));

    it("doesn't render a anything", () => {
      // eslint-disable-next-line no-undef
      expect($rendered.children().length).toBe(0);
    });
  });
});
