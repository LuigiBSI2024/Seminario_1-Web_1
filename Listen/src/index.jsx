/* Abaixo deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";
import { BlogLocal } from "./app";

import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <BlogLocal/>
  </StrictMode>
);


/* Acima deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/