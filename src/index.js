import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "./store";

import "./index.css";

import App from "./App.jsx";

const appRoot = ReactDOM.createRoot(document.querySelector("#root"));

appRoot.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
