import React from "react";
import { createRoot } from "react-dom/client";

// Create the parent element with two children divs
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "I am an h1 tag"),
    React.createElement("h2", { key: "h2-1" }, "I am an h2 tag")
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am Shiva"),
    React.createElement("h2", { key: "h2-2" }, "How are you")
  ])
]);

// Render the parent element to the root div
const root = createRoot(document.querySelector("#root"));
root.render(parent);
