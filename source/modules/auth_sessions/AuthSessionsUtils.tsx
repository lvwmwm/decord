// Module ID: 13689
// Function ID: 105069
// Name: useAuthSessions
// Dependencies: [31, 1194, 13690, 566, 1212, 3712, 2]
// Exports: formatDate, useAuthSessions

// Module 13689 (useAuthSessions)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  let items = [closure_5];
  stateFromStoresObject = stateFromStoresObject(566).useStateFromStoresObject(items, () => outer1_5.getSessions());
  const items1 = [stateFromStoresObject];
  return React.useMemo(() => {
    const items = [...authSessionIdHash];
    authSessionIdHash = outer1_4.getAuthSessionIdHash();
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
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t.TXCmfL);
  } else {
    stringResult = importDefault(3712)(arg0).fromNow();
    const obj = importDefault(3712)(arg0);
  }
  return stringResult;
};
