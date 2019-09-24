import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import reactComponent from "./reactComponent";
import reactComponentWithHooks from "./reactComponentWithHooks";

console.log(reactComponent, reactComponentWithHooks);

export const reactComponentParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: reactComponent
});

export const reactComponentWithHooksParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: reactComponentWithHooks
});
