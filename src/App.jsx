import React, { useEffect } from "react";
import Router from "./routers/Router";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ToastContainer autoClose={1500} />
      <Router />
    </>
  );
};

export default App;
