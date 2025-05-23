import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Layout from "./pages/Layout";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1></h1>} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
