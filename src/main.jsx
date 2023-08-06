import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DownloadPDFProvider } from "./context/downloadPDFContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DownloadPDFProvider>
      <App />
    </DownloadPDFProvider>
  </React.StrictMode>
);
