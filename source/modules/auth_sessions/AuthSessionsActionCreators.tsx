// Module ID: 13852
// Function ID: 106071
// Name: _fetchAuthSessions
// Dependencies: [5, 653, 507, 686, 2]
// Exports: clearAuthSessions, fetchAuthSessions, logOutSessions

// Module 13852 (_fetchAuthSessions)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchAuthSessions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _logOutSessions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  return _fetchAuthSessions(...arguments);
};
export const clearAuthSessions = function clearAuthSessions() {
  importDefault(686).dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions(id_hash) {
  return _logOutSessions(...arguments);
};
