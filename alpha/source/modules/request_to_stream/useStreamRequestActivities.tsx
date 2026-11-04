// Module ID: 15085
// Function ID: 15086
// Name: useStreamRequestActivities
// Dependencies: [19, 502, 5895, 6705, 9888, 9437, 504, 2]
// Exports: default, getStreamRequestActivities

// Module 15085 (useStreamRequestActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9437 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9888 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5895 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6705 */;
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
