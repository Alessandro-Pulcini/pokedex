import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./Pokedex";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Layout from "./pages/Layout";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
      <Pokedex />
    </BrowserRouter>
  </React.StrictMode>
);
