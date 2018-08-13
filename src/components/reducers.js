import {
  createEntry,
  createEntryReducer
} from "../actions/create";
import {
  updateInput,
  updateInputReducer,
  deleteEntry,
  deleteEntryReducer
} from "../actions/edit";
import {
  updateFilter,
  updateFilterReducer,
  updateSearch,
  updateSearchReducer
} from "../actions/fetch";

let initialState = {
  companyList: [
    {
      name: "JCA",
      status: "Approved",
      contact: {
        name: "Jake Smith",
        phone: "404-384-2115",
        email: "jsmith@jasoncarpentry.com"
      },
      performance: "Good"
    },
    {
      name: "PRO",
      status: "Declined",
      contact: {
        name: "Sharon Price",
        phone: "404-221-7190",
        email: "sprice@professionals.org"
      },
      performance: "Weak"
    },
    {
      name: "JST",
      status: "Pending",
      contact: {
        name: "Brian Moore",
        phone: "404-445-8745",
        email: "b.moore@jumpstart.com"
      },
      performance: "Good"
    },
    {
      name: "NPL",
      status: "Researching",
      contact: {
        name: "Rick Chase",
        phone: "404-217-2899",
        email: "rchase@newplace.com"
      },
      performance: "Strong"
    }
  ],
  filter: '',
  companySearch: '',
  companyEditSelect: 'New',
  nameInputValue: '',
  statusInputValue: 'Researching',
  contactNameInputValue: '',
  contactPhoneInputValue: '',
  contactEmailInputValue: '',
  performanceInputValue: ''
};

let reducers = {
  [createEntry]: createEntryReducer,
  [updateInput]: updateInputReducer,
  [updateFilter]: updateFilterReducer,
  [updateSearch]: updateSearchReducer,
  [deleteEntry]: deleteEntryReducer
};

let fallbackReducer = state => state;

export let reducer = (oldState = initialState, action) => {
  let subreducer = reducers[action.type] || fallbackReducer;
  let newState = subreducer(oldState, action);
  return newState;
};
