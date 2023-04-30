import React from "react";
import RegisterForm from "../components/Form";

import { Link } from "react-router-dom";

import "../styles/create-employee.css";

const CreateEmployeePage = () => {
  return (
    <>
      <div className="homepage-body">
        <h1>HRnet</h1>
        <div>
          <Link to={`/employees-table`}>View Current Employees</Link>
        </div>
        <h2>Create Employee</h2>
        <RegisterForm />
      </div>
    </>
  );
};

export default CreateEmployeePage;
