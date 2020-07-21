import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

describe("List", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <List cards={[{ id: 2, title: "test", content: "content" }]} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders to UI as expected", () => {
    const tree = renderer
      .create(<List cards={[{ id: 2, title: "test", content: "content" }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
