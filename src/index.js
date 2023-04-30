import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import CreateEmployee from "./pages/CreateEmployee";
import DisplayEmployeeTable from "./pages/EmployeesTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="employees-table" element={<DisplayEmployeeTable />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
