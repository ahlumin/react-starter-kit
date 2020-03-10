import { all, call } from 'redux-saga/effects';

import userSaga from './user';

export default function* root(helpers) {
  yield all([call(userSaga, helpers)]);
}
