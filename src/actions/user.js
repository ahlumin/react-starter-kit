export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';

export const userFetchFailed = () => ({
  type: USER_FETCH_FAILED,
});

export const userFetchRequested = () => ({
  type: USER_FETCH_REQUESTED,
});

export const userFetchSucceeded = payload => ({
  type: USER_FETCH_SUCCEEDED,
  payload,
});
