// Module ID: 13517
// Function ID: 102556
// Name: useAuthSessions
// Dependencies: []
// Exports: formatDate, useAuthSessions

// Module 13517 (useAuthSessions)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  const items = [closure_5];
  const stateFromStoresObject = arg1(dependencyMap[3]).useStateFromStoresObject(items, () => sessions.getSessions());
  const arg1 = stateFromStoresObject;
  const items1 = [stateFromStoresObject];
  return React.useMemo(() => {
    const items = [...closure_0];
    const authSessionIdHash = authSessionIdHash.getAuthSessionIdHash();
    const stateFromStoresObject = authSessionIdHash;
    let first = null;
    if (null != authSessionIdHash) {
      const findIndexResult = items.findIndex((id_hash) => id_hash.id_hash === authSessionIdHash);
      first = null;
      if (findIndexResult >= 0) {
        first = items.splice(findIndexResult, 1)[0];
      }
    }
    const sorted = items.sort((approx_last_used_time, approx_last_used_time2) => {
      approx_last_used_time = approx_last_used_time2.approx_last_used_time;
      approx_last_used_time2 = approx_last_used_time.approx_last_used_time;
      return approx_last_used_time.valueOf() - approx_last_used_time2.valueOf();
    });
    const obj = { currentSession: first, otherSessions: items };
    return obj;
  }, items1);
};
export const formatDate = function formatDate(arg0) {
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = arg1(dependencyMap[4]).intl;
    let stringResult = intl.string(arg1(dependencyMap[4]).t.TXCmfL);
  } else {
    stringResult = importDefault(dependencyMap[5])(arg0).fromNow();
    const obj = importDefault(dependencyMap[5])(arg0);
  }
  return stringResult;
};
