import React, { useState } from "react";
import COMPANY_DEPT_OBJECTS from "../data/companyDepartments";
import US_STATES_OBJECTS from "../data/usStates";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/create-employee.css";

const RegisterForm = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(US_STATES_OBJECTS[0]);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState(COMPANY_DEPT_OBJECTS[0]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const submitForm = (e) => {
    setIsOpen(true);
    e.preventDefault();
    const EmployeesList =
    JSON.parse(localStorage.getItem("EmployeesList")) || [];
    const Employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toLocaleDateString("en-US"),
      startDate: startDate.toLocaleDateString("en-US"),
      street,
      city,
      state: state.value,
      zipCode,
      department: department.value,
    };
    EmployeesList.push(Employee);
    localStorage.setItem("EmployeesList", JSON.stringify(EmployeesList));
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm} className="form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePicker
            type="date"
            id="birthdate"
            selected={dateOfBirth}
            onChange={(date) => setdateOfBirth(date)}
          />
          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            type="date"
            id="startDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <fieldset className="address-insert">
            <legend className="address-title">Address</legend>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="state">State</label>
            <Select
              id="state"
              value={state}
              onChange={(selectedOption) => setState(selectedOption)}
              options={US_STATES_OBJECTS}
            />
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Select
            id="department"
            value={department}
            onChange={(selectedOption) => setDepartment(selectedOption)}
            options={COMPANY_DEPT_OBJECTS}
          />
          <button className="save-button" type="submit">
            Save
          </button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
          <div>You have been registered.</div>
        </Modal>
      </div>
    </>
  );
};

export default RegisterForm;
