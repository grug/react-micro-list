import React from "react";
import { shallow, mount } from "enzyme";
import ReactMicroList from "../src/index";

describe("ReactMicroList component", () => {
  it("Displays a list of things when the component isn't loading", () => {
    const wrapper = shallow(
      <ReactMicroList
        data={["foo", "bar", "baz"]}
        render={(item, key) => <p key={key}>{item}</p>}
        noResults={<p>You have no results</p>}
        loading={false}
        loadingComponent={<p id="loading">loading</p>}
        id="parent"
      />
    );

    expect(wrapper.find("#parent").children().length).toEqual(3);
  });

  it("Displays loading component when loading flag is true", () => {
    const wrapper = shallow(
      <ReactMicroList
        data={[]}
        render={item => <p>{item}</p>}
        noResults={<p>You have no results</p>}
        loading={true}
        loadingComponent={<p id="loading">loading</p>}
      />
    );

    expect(wrapper.find("#loading").text()).toEqual("loading");
  });

  it("Displays a list of things when the component isn't loading", () => {
    const wrapper = shallow(
      <ReactMicroList
        data={[]}
        render={(item, key) => <p key={key}>{item}</p>}
        noResults={<p id="no-results">You have no results</p>}
        loading={false}
        loadingComponent={<p id="loading">loading</p>}
      />
    );

    expect(wrapper.find("#no-results").text()).toEqual("You have no results");
  });
});
