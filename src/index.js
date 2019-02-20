import React from "react";
import App from "./js/components/App.jsx"
import ReactDOM from "react-dom";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
