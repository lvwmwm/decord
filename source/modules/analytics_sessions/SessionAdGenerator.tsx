// Module ID: 6962
// Function ID: 55641
// Name: isAdSessionExpired
// Dependencies: [664, 491, 6705, 686, 1184, 2]
// Exports: clearAdSession, getCurrentAdSession, getOrRefreshAdSession

// Module 6962 (isAdSessionExpired)
const require = arg1;
function isAdSessionExpired(createdAtTimestamp) {
  const timestamp = Date.now();
  if (timestamp < createdAtTimestamp.createdAtTimestamp) {
    let obj = importDefault(1184);
    obj = { category: "ad" };
    const _HermesInternal = HermesInternal;
    obj.message = "future facing timestamp Date.now(): " + timestamp + ", initialized timestamp: " + createdAtTimestamp.createdAtTimestamp;
    obj.addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - createdAtTimestamp.lastUsedTimestamp;
    let tmp5 = diff > require(6705) /* result */.SESSION_IDLE_TIMEOUT_MILLIS;
    if (!tmp5) {
      tmp5 = timestamp - createdAtTimestamp.createdAtTimestamp > closure_3;
    }
    return tmp5;
  }
}
let closure_3 = 12 * require("set").Millis.HOUR;
let c4 = null;
const result = require("result").fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

export const getOrRefreshAdSession = function getOrRefreshAdSession(shouldExtendSession) {
  let flag = shouldExtendSession;
  if (shouldExtendSession === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  if (null != obj) {
    if (!isAdSessionExpired(obj)) {
      if (flag) {
        obj.lastUsedTimestamp = timestamp;
      }
      let tmp5 = obj;
    }
    return tmp5;
  }
  obj = { uuid: require(491) /* v1 */.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: require(6705) /* result */.CLIENT_SESSION_STORAGE_VERSION };
  const obj2 = require(491) /* v1 */;
  importDefault(686).dispatch({ type: "AD_SESSION_RESET" });
  tmp5 = obj;
};
export function clearAdSession() {
  let c4 = null;
}
export function getCurrentAdSession() {
  return c4;
}
export { isAdSessionExpired };
