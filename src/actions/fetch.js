const UPDATE_FILTER = 'UPDATE_FILTER';
export let updateFilter = (filter) => ({ type: UPDATE_FILTER, payload: filter });
updateFilter.toString = () => UPDATE_FILTER;

export let updateFilterReducer = (state, action) => {
  let newState = { ...state, filter: (action.payload === 'All' ? '' : action.payload) };
  return newState;
};

const UPDATE_SEARCH = 'UPDATE_SEARCH';
export let updateSearch = (search) => ({ type: UPDATE_SEARCH, payload: search });
updateSearch.toString = () => UPDATE_SEARCH;

export let updateSearchReducer = (state, action) => {
  let newState = { ...state, companySearch: action.payload };
  return newState;
};