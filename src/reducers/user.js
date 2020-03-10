import { USER_FETCH_SUCCEEDED } from '../actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
