/* Abaixo deste comentário será usado recursos Reactjs*/
import React from "react";
import ReactDOM from "react-dom/client";


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";
import { BlogLocal } from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BlogLocal/>
  </StrictMode>
);


/* Acima deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/