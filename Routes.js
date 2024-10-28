import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./src/pages/Landing";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
   
  </Routes>
);

export default AppRoutes;
