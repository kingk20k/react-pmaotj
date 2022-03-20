import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "../components/Home/Home.js"
import Play from "../components/PLay/Play"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/1" element={<Expenses />} />
      <Route path="/" element={<App />} /> 
      <Route path="/play" element={<Play/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);