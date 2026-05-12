import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Navbar from "../admin/Navbar";
import SideBar from "../admin/SideBar";
import ForgotPassword from "../pages/ForgotPassword";
import ContactSupport from "../pages/ContactSupport";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contactSupport" element={<ContactSupport />} />
      </Routes>
    </>
  );
};

export default Router;
