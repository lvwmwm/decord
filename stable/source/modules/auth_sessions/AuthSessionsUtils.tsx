// Module ID: 14977
// Function ID: 14978
// Name: AuthSessionsUtils
// Dependencies: [19, 502, 14978, 504, 1115, 4380, 2]
// Exports: formatDate, useAuthSessions

// Module 14977 (AuthSessionsUtils)
import util from "util" /* 1115 */;
import _modDef4380 from "module_4380" /* 4380 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AuthSessionsStore from "AuthSessionsStore" /* 14978 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
  const items = [AuthSessionsStore];
  stateFromStoresObject = stateFromStoresObject(504).useStateFromStoresObject(items, () => sessions.getSessions());
  const items1 = [stateFromStoresObject];
  return noop.useMemo(() => {
    const otherSessions = [...stateFromStoresObject];
    const authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
    let currentSession = null;
    if (null != authSessionIdHash) {
      const findIndexResult = otherSessions.findIndex((id_hash) => id_hash.id_hash === authSessionIdHash);
      currentSession = null;
      if (findIndexResult >= 0) {
        currentSession = otherSessions.splice(findIndexResult, 1)[0];
      }
    }
    const sorted = otherSessions.sort((approx_last_used_time, approx_last_used_time2) => {
      approx_last_used_time = approx_last_used_time2.approx_last_used_time;
      approx_last_used_time2 = approx_last_used_time.approx_last_used_time;
      return approx_last_used_time.valueOf() - approx_last_used_time2.valueOf();
    });
    return { currentSession, otherSessions };
  }, items1);
};
export const formatDate = function formatDate(arg0) {
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.TXCmfL);
  } else {
    stringResult = _modDef4380(arg0).fromNow();
    const obj = _modDef4380(arg0);
  }
  return stringResult;
};
