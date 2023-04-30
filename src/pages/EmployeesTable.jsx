import React from "react";
import { Table } from "openclassrooms-table-anais/dist/lib";
import { Link } from "react-router-dom";

import "../styles/create-employee.css";

const DisplayEmployeeTable = () => {
  const dataFromLocalStorage =
    JSON.parse(localStorage.getItem("EmployeesList")) || [];
  return (
    <>
      <Table data={dataFromLocalStorage} />
      <div className="link-to-home">
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
};

export default DisplayEmployeeTable;
