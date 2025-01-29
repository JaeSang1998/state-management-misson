import React from "react";
import ReactDOM from "react-dom/client";
import { worker } from "./mocks/browser";
import App from "./App";
import "./styles/index.css";

// MSW(모의 서버) 시작
worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
