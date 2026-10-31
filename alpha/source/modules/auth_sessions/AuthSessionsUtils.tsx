// Module ID: 16672
// Function ID: 16673
// Name: AuthSessionsUtils
// Dependencies: [19, 502, 16673, 504, 1113, 2042, 2]
// Exports: formatDate, useAuthSessions

// Module 16672 (AuthSessionsUtils)
import intl2 from "intl" /* 1113 */;
import _modDef2042 from "module_2042" /* 2042 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AuthSessionsStore from "AuthSessionsStore" /* 16673 */;
import size from "module_2" /* 2 */;

let approx_last_used_time;

const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export function useAuthSessions() {
  let sessions;
  let stateFromStoresObject;
  const items = [AuthSessionsStore];
  const obj = stateFromStoresObject(504);
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => sessions.getSessions());
  const items1 = [stateFromStoresObject];
  return react.useMemo(() => {
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
      const valueOfResult = approx_last_used_time.valueOf();
      return valueOfResult - approx_last_used_time2.valueOf();
    });
    return { currentSession, otherSessions };
  }, items1);
}
export function formatDate(arg0) {
  let stringResult;
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.TXCmfL);
  } else {
    const obj = _modDef2042(arg0);
    stringResult = obj.fromNow();
  }
  return stringResult;
}
