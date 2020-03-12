import { LOCATION_CHANGE } from '../actions/navigation';

const initialState = {
  pathname: '/',
  search: '',
  hash: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
