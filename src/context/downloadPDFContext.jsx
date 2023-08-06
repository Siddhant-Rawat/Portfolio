import { createContext, useContext } from "react";

const pdfContext = createContext();

const downloadPDF = () => {
  fetch("Resume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Resume.pdf";
      alink.click();
    });
  });
};

const initialState = {
  pdf: downloadPDF,
};

const DownloadPDFProvider = ({ children }) => {

  return (
    <pdfContext.Provider value={{ ...initialState }}>{children}</pdfContext.Provider>
  );
};

const usePdfContext = () => {
  return useContext(pdfContext);
};

export {usePdfContext , DownloadPDFProvider};
