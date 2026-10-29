// Module ID: 14797
// Function ID: 14798
// Name: useStreamRequestActivities
// Dependencies: [19, 502, 5750, 6557, 1084, 9260, 558, 576, 504, 2]
// Exports: getStreamRequestActivities

// Module 14797 (useStreamRequestActivities)
import Constants from "Constants" /* 1084 */;
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9260 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5750 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6557 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isStreamRequestActivity(platform) {
  let tmp = isPlayingGameActivityDefault(platform);
  if (tmp) {
    let str;
    const has = set.has;
    if (platform != null) {
      str = platform.platform;
    }
    if (str == null) {
      str = "";
    }
    tmp = !has(str);
  }
  return tmp;
}
let items = [, , ];
({ XBOX: arr[0], PS4: arr[1], PS5: arr[2] } = Constants.ActivityGamePlatforms);
const set = new Set(items);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamRequestActivities(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp8;
    let tmp9;
    if (cResult[2] === arg0) {
      tmp8 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
    if (cResult[4] !== stateFromStores) {
      const found = stateFromStores.filter(isStreamRequestActivity);
      cResult[4] = stateFromStores;
      cResult[5] = found;
      tmp9 = found;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const fn = function o() {
    let activities;
    if (AuthenticationStore.getId() === closure_0) {
      activities = SelfPresenceStore.getActivities();
    } else {
      activities = PresenceStore.getActivities(tmp, closure_1);
    }
    return activities;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp8 = fn;
}) : (function useStreamRequestActivities(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    let activities;
    if (AuthenticationStore.getId() === closure_0) {
      activities = SelfPresenceStore.getActivities();
    } else {
      activities = PresenceStore.getActivities(tmp, closure_1);
    }
    return activities;
  });
  const items1 = [stateFromStores];
  return react.useMemo(() => stateFromStores.filter(isStreamRequestActivity), items1);
});
const result = size.fileFinishedImporting("modules/request_to_stream/useStreamRequestActivities.tsx");

export default tmp3;
export { isStreamRequestActivity };
export function getStreamRequestActivities(userId, guildId) {
  let activities;
  if (AuthenticationStore.getId() === userId) {
    activities = SelfPresenceStore.getActivities();
  } else {
    activities = PresenceStore.getActivities(userId, guildId);
  }
  return activities.filter(isStreamRequestActivity);
}
