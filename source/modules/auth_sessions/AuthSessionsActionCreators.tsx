// Module ID: 13729
// Function ID: 103860
// Name: _fetchAuthSessions
// Dependencies: []
// Exports: clearAuthSessions, fetchAuthSessions, logOutSessions

// Module 13729 (_fetchAuthSessions)
function _fetchAuthSessions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchAuthSessions = obj;
  return obj(...arguments);
}
function _logOutSessions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _logOutSessions = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  return _fetchAuthSessions(...arguments);
};
export const clearAuthSessions = function clearAuthSessions() {
  importDefault(dependencyMap[3]).dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions(id_hash) {
  return _logOutSessions(...arguments);
};
