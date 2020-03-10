import { call, put, takeLatest } from 'redux-saga/effects';

function stop() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 5000);
  });
}

export function* fetchUser() {
  try {
    yield call(stop);
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: { name: 'Jacky' } });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* userSaga(helpers) {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser, helpers);
}

export default userSaga;
