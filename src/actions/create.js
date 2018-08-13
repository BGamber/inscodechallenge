const CREATE_ENTRY = "CREATE_ENTRY";
export let createEntry = () => ({ type: CREATE_ENTRY });
createEntry.toString = () => CREATE_ENTRY;

export let createEntryReducer = state => {
  let newEntry = {
    name: state.nameInputValue,
    status: state.statusInputValue,
    contact: {
      name: state.contactNameInputValue,
      phone: state.contactPhoneInputValue,
      email: state.contactEmailInputValue
    },
    performance: state.performanceInputValue
  };
  let newState = {
    ...state,
    companyEditSelect: "New",
    nameInputValue: "",
    statusInputValue: "Researching",
    contactNameInputValue: "",
    contactPhoneInputValue: "",
    contactEmailInputValue: "",
    performanceInputValue: "Strong",
    companyList: [newEntry, ...state.companyList.filter(company => company.name !== state.companyEditSelect)]
  };
  return newState;
};
