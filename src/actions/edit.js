const UPDATE_INPUT = "UPDATE_INPUT";
export let updateInput = (key, value) => ({
  type: UPDATE_INPUT,
  key: key,
  value: value
});
updateInput.toString = () => UPDATE_INPUT;

export let updateInputReducer = (state, action) => {
  let newState = { ...state, [action.key]: action.value };
  let selectedCompany = state.companyList.filter(
    company => company.name === action.value
  )[0];
  if (selectedCompany) {
    newState.nameInputValue = selectedCompany.name;
    newState.statusInputValue = selectedCompany.status;
    newState.contactNameInputValue = selectedCompany.contact.name;
    newState.contactPhoneInputValue = selectedCompany.contact.phone;
    newState.contactEmailInputValue = selectedCompany.contact.email;
    newState.performanceInputValue = selectedCompany.performance;
  } else if (action.key === "companyEditSelect" && action.value === "New") {
    newState.nameInputValue = "";
    newState.statusInputValue = "Researching";
    newState.contactNameInputValue = "";
    newState.contactPhoneInputValue = "";
    newState.contactEmailInputValue = "";
    newState.performanceInputValue = "Strong";
  } else {
    newState[action.key] = action.value;
  }
  return newState;
};

const DELETE_ENTRY = "DELETE_ENTRY";
export let deleteEntry = () => ({ type: DELETE_ENTRY });
deleteEntry.toString = () => DELETE_ENTRY;

export let deleteEntryReducer = (state, action) => {
  let newState = { ...state };
  let selectedCompany = state.companyList.filter(
    company => company.name === state.companyEditSelect
  )[0];
  if (selectedCompany) {
    newState.companyList = state.companyList.filter(
      company => company.name !== state.companyEditSelect
    );
    newState.companyEditSelect = "New";
    newState.nameInputValue = "";
    newState.statusInputValue = "Researching";
    newState.contactNameInputValue = "";
    newState.contactPhoneInputValue = "";
    newState.contactEmailInputValue = "";
    newState.performanceInputValue = "Strong";
  }
  return newState;
};
