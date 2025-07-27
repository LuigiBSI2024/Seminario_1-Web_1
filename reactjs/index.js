import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";

import App from "./functions";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);