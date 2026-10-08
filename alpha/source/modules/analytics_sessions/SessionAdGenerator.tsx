// Module ID: 7398
// Function ID: 7399
// Name: SessionAdGenerator
// Dependencies: [1102, 1278, 7182, 584, 1254, 2]
// Exports: clearAdSession, getCurrentAdSession, getOrRefreshAdSession, isAdSessionExpired

// Module 7398 (SessionAdGenerator)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import v1 from "v1" /* 1278 */;
import SessionUtils from "SessionUtils" /* 7182 */;
import size from "module_2" /* 2 */;

let _null;

let closure_3 = 12 * DurationsDefault.Millis.HOUR;
let c4 = null;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

export const getOrRefreshAdSession = function getOrRefreshAdSession(shouldExtendSession) {
  let obj3;
  let flag = shouldExtendSession;
  if (shouldExtendSession === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  if (null != _null) {
    let flag2;
    let tmp10;
    const _Date = Date;
    const timestamp1 = Date.now();
    if (timestamp1 < _null.createdAtTimestamp) {
      const _HermesInternal = HermesInternal;
      const obj = { category: "ad", message: "future facing timestamp Date.now(): " + timestamp1 + ", initialized timestamp: " + _null.createdAtTimestamp };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      addBreadcrumb(obj);
      flag2 = true;
    } else {
      const diff = timestamp1 - tmp12.lastUsedTimestamp;
      flag2 = diff > SessionUtils.SESSION_IDLE_TIMEOUT_MILLIS || timestamp1 - tmp12.createdAtTimestamp > closure_3;
    }
    if (!flag2) {
      if (flag) {
        _null.lastUsedTimestamp = timestamp;
      }
      tmp10 = _null;
    }
    return tmp10;
  }
  const obj2 = { uuid: obj3.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: SessionUtils.CLIENT_SESSION_STORAGE_VERSION };
  _null = obj2;
  obj3 = v1;
  const obj4 = DispatcherDefault;
  obj4.dispatch({ type: "AD_SESSION_RESET" });
  tmp10 = _null;
};
export function clearAdSession() {
  let c4 = null;
}
export function getCurrentAdSession() {
  return c4;
}
export const isAdSessionExpired = function isAdSessionExpired(createdAtTimestamp) {
  const timestamp = Date.now();
  if (timestamp < createdAtTimestamp.createdAtTimestamp) {
    const _HermesInternal = HermesInternal;
    const obj = { category: "ad", message: "future facing timestamp Date.now(): " + timestamp + ", initialized timestamp: " + createdAtTimestamp.createdAtTimestamp };
    const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
    SentryUtilsDefault;
    addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - createdAtTimestamp.lastUsedTimestamp;
    const tmp5 = diff > SessionUtils.SESSION_IDLE_TIMEOUT_MILLIS || timestamp - createdAtTimestamp.createdAtTimestamp > closure_3;
    return tmp5;
  }
};
