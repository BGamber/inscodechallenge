import React from "react";
import Header from "./Header.js";
import BackToMenuBtn from "./BackToMenuBtn";
import "../styles/ViewList.css";

import { updateSearch, updateFilter } from "../actions/fetch";

import { connect } from "react-redux";

let ViewList = ({
  companyList,
  companySearch,
  searchCompany,
  resetSearch,
  filter,
  changeFilter,
  resetFilter
}) => (
  <div className="view-list">
    <Header content="View Targets" />
    <BackToMenuBtn />
    <label>
      Search:
      <input value={companySearch} onChange={event => searchCompany(event)} />
      <button onClick={() => resetSearch()}>Reset</button>
    </label>
    <label>
      Filter:
      <select value={filter} onChange={event => changeFilter(event)}>
        <option value="All">All</option>
        <option value="Researching">Researching</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Declined">Declined</option>
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
            >
              {company.name}
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
    }
  };
};

let ViewListSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewList);

export default ViewListSmart;
