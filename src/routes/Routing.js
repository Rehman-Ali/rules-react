import React from "react";
import { Route, Routes } from "react-router-dom";
import Rules from "../pages/Rules";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Rules />} />
    </Routes>
  );
};

export default Routing;
