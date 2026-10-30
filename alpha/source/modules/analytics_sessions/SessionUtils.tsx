// Module ID: 7644
// Function ID: 7645
// Name: SessionUtils
// Dependencies: [1090, 2]
// Exports: isSessionExpired, timestampOrZero

// Module 7644 (SessionUtils)
import DurationsDefault from "Durations" /* 1090 */;
import size from "module_2" /* 2 */;

const result = 30 * DurationsDefault.Millis.MINUTE;
const _window = result;
const result1 = size.fileFinishedImporting("modules/analytics_sessions/SessionUtils.tsx");

export const SESSION_IDLE_TIMEOUT_MILLIS = result;
export const CLIENT_SESSION_STORAGE_VERSION = 1;
export function isSessionExpired(lastUsedTimestamp) {
  const sum = _window + lastUsedTimestamp.lastUsedTimestamp;
  return sum - Date.now() <= 0;
}
export function timestampOrZero(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Number = Number;
    num = Number(arg0);
  }
  return num;
}
