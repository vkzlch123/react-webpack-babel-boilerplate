import React, { Component } from "react";
import FormContainer from "./js/components/container/FormContainer.jsx";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-4 offset-md-1">
            <p>Create a new article</p>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
