/* Abaixo deste comentário será usado recursos Reactjs*/
import React from "react";
import ReactDOM from "react-dom/client";


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";
import { BlogLocal } from "./app";

const root = createRoot(document.getElementById("root"));

/* Infelizmente, teria que ter um banco de dados ou algo que armazene os assuntos, caso contrário não há motivo para colocar o "<BlogLocal></BlogLocal>"
entre os StrictMode. */

root.render(
  <StrictMode>
    <BlogLocal></BlogLocal> 
  </StrictMode>
);



/* Acima deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/