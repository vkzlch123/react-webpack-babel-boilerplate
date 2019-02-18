import React from 'react'
import FormContainer from "./js/components/container/FormContainer.jsx";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
