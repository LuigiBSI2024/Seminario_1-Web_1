/* Abaixo deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";

import App from "./funct";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* Acima deste comentário será usado recursos Reactjs
-------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------
*/