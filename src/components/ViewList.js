import React from "react";
import Header from "./Header.js";
import BackToMenuBtn from "./BackToMenuBtn";
import "../styles/ViewList.css";

import { updateSearch, updateFilter } from "../actions/fetch";
import { updateInput } from "../actions/edit";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

let ViewList = ({
  companyList,
  companySearch,
  searchCompany,
  resetSearch,
  filter,
  changeFilter,
  resetFilter,
  targetEdit
}) => (
  <div className="view-list">
    <Header content="View Targets" />
    {/* <BackToMenuBtn /> */}
    <label>
      Search Name:
      <input value={companySearch} onChange={event => searchCompany(event)} />
      <button onClick={() => resetSearch()}>Reset</button>
    </label>
    <label>
      Filter Status:
      <select value={filter} onChange={event => changeFilter(event)}>
        <option value="All">All</option>
        <option value="Researching">Researching</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Declined">Declined</option>
      </select>
      <button onClick={() => resetFilter()}>Reset</button>
    </label>
    <label>
      Filter Performance:
      <select value={filter} onChange={event => changeFilter(event)}>
        <option value="All">All</option>
        <option value="Researching">Strong</option>
        <option value="Pending">Good</option>
        <option value="Approved">Weak</option>
      </select>
      <button onClick={() => resetFilter()}>Reset</button>
    </label>
    <div className="list-display">
      <div className="column-name">
        <div className="col-name-header">Name</div>
        {companyList
          .filter(company => company.name.indexOf(companySearch) !== -1)
          .filter(company => company.status.indexOf(filter) !== -1)
          .map((company, index) => (
            <div
              key={"list-" + company.name}
              className={"col-name-item" + (index % 2 === 0 ? " even" : " odd")}
              onClick={() => targetEdit(company.name)}
            >
              <Link to="/edit">{company.name}</Link>
            </div>
          ))}
      </div>
      <div className="column-status">
        <div className="col-status-header">Status</div>
        {companyList
          .filter(company => company.name.indexOf(companySearch) !== -1)
          .filter(company => company.status.indexOf(filter) !== -1)
          .map((company, index) => (
            <div
              key={"list-" + company.name}
              className={
                "col-status-item" + (index % 2 === 0 ? " even" : " odd")
              }
            >
              {company.status}
            </div>
          ))}
      </div>
      <div className="column-performance">
        <div className="col-performance-header">Performance</div>
        {companyList
          .filter(company => company.name.indexOf(companySearch) !== -1)
          .filter(company => company.status.indexOf(filter) !== -1)
          .map((company, index) => (
            <div
              key={"list-" + company.name}
              className={
                "col-performance-item" + (index % 2 === 0 ? " even" : " odd")
              }
            >
              {company.performance}
            </div>
          ))}
      </div>
      <div className="column-contact">
        <div className="col-contact-header">Contact</div>
        {companyList
          .filter(company => company.name.indexOf(companySearch) !== -1)
          .filter(company => company.status.indexOf(filter) !== -1)
          .map((company, index) => (
            <div
              key={"list-" + company.name}
              className={
                "col-contact-item" + (index % 2 === 0 ? " even" : " odd")
              }
            >
              {company.contact.name}
            </div>
          ))}
      </div>
    </div>
  </div>
);

let mapStateToProps = state => {
  return {
    companyList: state.companyList,
    filter: state.filter,
    companySearch: state.companySearch
  };
};

let mapDispatchToProps = dispatch => {
  return {
    searchCompany: event => {
      dispatch(updateSearch(event.target.value));
    },
    changeFilter: event => {
      dispatch(updateFilter(event.target.value));
    },
    resetSearch: () => {
      dispatch(updateSearch(""));
    },
    resetFilter: () => {
      dispatch(updateFilter("All"));
    },
    targetEdit: (target) => {
      dispatch(updateInput("companyEditSelect", target));

    },
  };
};

let ViewListSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewList);

export default ViewListSmart;
