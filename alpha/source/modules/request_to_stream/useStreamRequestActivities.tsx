// Module ID: 14870
// Function ID: 14871
// Name: useStreamRequestActivities
// Dependencies: [19, 502, 5761, 6570, 9738, 9292, 504, 2]
// Exports: default, getStreamRequestActivities

// Module 14870 (useStreamRequestActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9292 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9738 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
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
let items = [ActivityGamePlatforms.ActivityGamePlatforms.XBOX, ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4, ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/request_to_stream/useStreamRequestActivities.tsx");

export default function useStreamRequestActivities(arg0, arg1) {
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
};
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
