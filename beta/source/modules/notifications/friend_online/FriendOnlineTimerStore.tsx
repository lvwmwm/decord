// Module ID: 18281
// Function ID: 18282
// Name: FriendOnlineTimerStore
// Dependencies: [1095, 504, 577, 2]

// Module 18281 (FriendOnlineTimerStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import DurationsDefault from "Durations" /* 1095 */;

const HOUR = DurationsDefault.Millis.HOUR;
const obj = { lastReportedAtMs: null };
let closure_2 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class FriendOnlineTimerStore extends PersistedStore {
}
const prototype = FriendOnlineTimerStore.prototype;
prototype["initialize"] = function initialize() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  if (tmp == null) {
    tmp = obj;
  }
  closure_2 = tmp;
};
prototype["isCooldownElapsed"] = function isCooldownElapsed() {
  let tmp = null == closure_2.lastReportedAtMs;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - closure_2.lastReportedAtMs >= HOUR;
  }
  return tmp;
};
prototype["getState"] = function getState() {
  return closure_2;
};
FriendOnlineTimerStore.displayName = "FriendOnlineTimerStore";
FriendOnlineTimerStore.persistKey = "FriendOnlineTimerStore";
const friendOnlineTimerStore = new FriendOnlineTimerStore(DispatcherDefault, {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    closure_2.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default friendOnlineTimerStore;
