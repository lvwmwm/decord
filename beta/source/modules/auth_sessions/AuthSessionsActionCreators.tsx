// Module ID: 14485
// Function ID: 14486
// Name: AuthSessionsActionCreators
// Dependencies: [5, 1074, 1271, 573, 2]
// Exports: clearAuthSessions, fetchAuthSessions, logOutSessions

// Module 14485 (AuthSessionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let length;

let obj = function _fetchAuthSessions() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    let user_sessions;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.AUTH_SESSIONS, rejectWithError: false };
    const value = await HTTP.get(obj4);
    const body = value.body;
    if (body != null) {
      user_sessions = body.user_sessions;
    }
    if (null != user_sessions) {
      const obj7 = { type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: value.body.user_sessions };
      obj = closure_129_1(closure_129_2[3]);
      obj.dispatch(obj7);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _logOutSessions() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let closure_0;
    let closure_2;
    let obj4;
    length = arg0;
    let value = tmp;
    let items = length;
    const _Array = Array;
    if (Array.isArray(length)) {
      items = arr2;
      if (0 === length.length) {
        let c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } else {
      items = [length];
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.AUTH_SESSIONS_LOGOUT, body: obj4, rejectWithError: false };
    obj4 = { session_id_hashes: items };
    value = await HTTP.post(request);
    const obj7 = { type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: items };
    obj = closure_130_1(closure_130_2[3]);
    obj.dispatch(obj7);
    return value;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  return obj(...arguments);
};
export const clearAuthSessions = function clearAuthSessions() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions() {
  return obj(...arguments);
};
