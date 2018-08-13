import React from "react";
import Header from "./Header.js";
import BackToMenuBtn from "./BackToMenuBtn";
import { Link } from "react-router-dom";
import "../styles/EditEntry.css";

import { createEntry } from "../actions/create";
import { updateInput, deleteEntry } from "../actions/edit";

import { connect } from "react-redux";

let EditEntry = ({
  companyList,
  companyEditSelect,
  nameInputValue,
  statusInputValue,
  contactNameInputValue,
  contactPhoneInputValue,
  contactEmailInputValue,
  performanceInputValue,
  changeInputField,
  submitTarget,
  deleteTarget
}) => (
  <div>
    <Header content="Create/Edit Target" />
    <BackToMenuBtn />
    <div className="edit-create-form">
      <div className="edit-create-company-form">
        <label>
          Edit:
          <select
            value={companyEditSelect}
            onChange={event => changeInputField("companyEditSelect", event)}
          >
            <option value="New">New</option>
            {companyList.map(company => (
              <option key={"option-" + company.name} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input
            value={nameInputValue}
            onChange={event => changeInputField("nameInputValue", event)}
          />
        </label>
        <label>
          Status:
          <select
            value={statusInputValue}
            onChange={event => changeInputField("statusInputValue", event)}
          >
            <option value="Researching">Researching</option>
            <option value="Pending">Pending Approval</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </select>
        </label>
        <label>
          Performance:
          <select
            value={performanceInputValue}
            onChange={event => changeInputField("performanceInputValue", event)}
          >
            <option value="Strong">Strong</option>
            <option value="Good">Good</option>
            <option value="Weak">Weak</option>
          </select>
        </label>
      </div>
      <div className="edit-create-contact-form">
        Contact Information:
        <label>
          Name:
          <input
            value={contactNameInputValue}
            onChange={event => changeInputField("contactNameInputValue", event)}
          />
        </label>
        <label>
          Phone:
          <input
            value={contactPhoneInputValue}
            onChange={event =>
              changeInputField("contactPhoneInputValue", event)
            }
          />
        </label>
        <label>
          Email:
          <input
            value={contactEmailInputValue}
            onChange={event =>
              changeInputField("contactEmailInputValue", event)
            }
          />
        </label>
      </div>
    </div>
    <div className="edit-create-form-buttons">
      {(() => {
        if (companyEditSelect !== "New" || nameInputValue !== "") {
          return (
            <Link
              className="submit-button"
              to="/"
              onClick={() => submitTarget()}
            >
              Submit Change
            </Link>
          );
        }
      })()}
      {(() => {
        if (companyEditSelect !== "New") {
          return (
            <Link
              className="delete-button"
              to="/"
              onClick={() => deleteTarget()}
            >
              Delete Target
            </Link>
          );
        }
      })()}
    </div>
  </div>
);

let mapStateToProps = state => {
  return {
    companyList: state.companyList,
    companyEditSelect: state.companyEditSelect,
    nameInputValue: state.nameInputValue,
    statusInputValue: state.statusInputValue,
    contactNameInputValue: state.contactNameInputValue,
    contactPhoneInputValue: state.contactPhoneInputValue,
    contactEmailInputValue: state.contactEmailInputValue,
    performanceInputValue: state.performanceInputValue
  };
};

let mapDispatchToProps = dispatch => {
  return {
    changeInputField: (field, event) => {
      dispatch(updateInput(field, event.target.value));
    },
    submitTarget: () => {
      dispatch(createEntry());
    },
    deleteTarget: () => {
      dispatch(deleteEntry());
    }
  };
};

let EditEntrySmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry);

export default EditEntrySmart;
