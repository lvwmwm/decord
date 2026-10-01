// Module ID: 14230
// Function ID: 14231
// Name: AuthSessionsUtils
// Dependencies: [19, 502, 14231, 504, 1115, 4421, 2]
// Exports: formatDate, useAuthSessions

// Module 14230 (AuthSessionsUtils)
import intl2 from "intl" /* 1115 */;
import _modDef4421 from "module_4421" /* 4421 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AuthSessionsStore from "AuthSessionsStore" /* 14231 */;
import size from "module_2" /* 2 */;

let approx_last_used_time;

const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = function useAuthSessions() {
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
};
export const formatDate = function formatDate(arg0) {
  let stringResult;
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.TXCmfL);
  } else {
    const obj = _modDef4421(arg0);
    stringResult = obj.fromNow();
  }
  return stringResult;
};
