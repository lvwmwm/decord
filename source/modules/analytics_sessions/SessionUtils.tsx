// Module ID: 6700
// Function ID: 51869
// Name: result
// Dependencies: []
// Exports: isSessionExpired, timestampOrZero

// Module 6700 (result)
const result = 30 * importDefault(dependencyMap[0]).Millis.MINUTE;
const result1 = arg1(dependencyMap[1]).fileFinishedImporting("modules/analytics_sessions/SessionUtils.tsx");

export const SESSION_IDLE_TIMEOUT_MILLIS = result;
export const CLIENT_SESSION_STORAGE_VERSION = 1;
export const isSessionExpired = function isSessionExpired(lastUsedTimestamp) {
  const sum = result + lastUsedTimestamp.lastUsedTimestamp;
  return sum - Date.now() <= 0;
};
export const timestampOrZero = function timestampOrZero(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
};
