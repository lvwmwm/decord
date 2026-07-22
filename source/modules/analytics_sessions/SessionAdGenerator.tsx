// Module ID: 6957
// Function ID: 55607
// Name: isAdSessionExpired
// Dependencies: []
// Exports: clearAdSession, getCurrentAdSession, getOrRefreshAdSession

// Module 6957 (isAdSessionExpired)
function isAdSessionExpired(closure_4) {
  const timestamp = Date.now();
  if (timestamp < closure_4.createdAtTimestamp) {
    let obj = importDefault(dependencyMap[4]);
    obj = { category: "ad" };
    const _HermesInternal = HermesInternal;
    obj.message = "future facing timestamp Date.now(): " + timestamp + ", initialized timestamp: " + closure_4.createdAtTimestamp;
    obj.addBreadcrumb(obj);
    return true;
  } else {
    const diff = timestamp - closure_4.lastUsedTimestamp;
    let tmp5 = diff > arg1(dependencyMap[2]).SESSION_IDLE_TIMEOUT_MILLIS;
    if (!tmp5) {
      tmp5 = timestamp - closure_4.createdAtTimestamp > closure_3;
    }
    return tmp5;
  }
}
let closure_3 = 12 * importDefault(dependencyMap[0]).Millis.HOUR;
let closure_4 = null;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/analytics_sessions/SessionAdGenerator.tsx");

export const getOrRefreshAdSession = function getOrRefreshAdSession(shouldExtendSession) {
  let flag = shouldExtendSession;
  if (shouldExtendSession === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  if (null != closure_4) {
    if (!isAdSessionExpired(closure_4)) {
      if (flag) {
        closure_4.lastUsedTimestamp = timestamp;
      }
      let tmp5 = closure_4;
    }
    return tmp5;
  }
  const obj = { uuid: arg1(dependencyMap[1]).v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: arg1(dependencyMap[2]).CLIENT_SESSION_STORAGE_VERSION };
  closure_4 = obj;
  const obj2 = arg1(dependencyMap[1]);
  importDefault(dependencyMap[3]).dispatch({ type: "AD_SESSION_RESET" });
  tmp5 = closure_4;
};
export function clearAdSession() {
  let closure_4 = null;
}
export function getCurrentAdSession() {
  return closure_4;
}
export { isAdSessionExpired };
