// Module ID: 12614
// Function ID: 12615
// Name: useUserProfileActivity
// Dependencies: [19, 8254, 1993, 4876, 4861, 504, 10337, 12615, 7592, 7789, 7785, 2]
// Exports: default

// Module 12614 (useUserProfileActivity)
import react from "react" /* 19 */;
import Constants from "Constants" /* 4861 */;
import UserProfileStackedActivityCardUtils from "UserProfileStackedActivityCardUtils" /* 12615 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const useMemo = react.useMemo;
const Features = Constants.Features;
let closure_8 = [];
let closure_9 = [];
let result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  let stateFromStores1;
  let stateFromStores2;
  _require = arg0;
  const tmp2 = stateFromStores2;
  let obj = require("get initialized");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[6])(arg0);
  }
  let tmpResult = tmp(tmp2[5]);
  const items1 = [PresenceStore];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => PresenceStore.getActivities(closure_0));
  const items2 = [ContentInventoryOutboxStore];
  const tmpResult2 = require("get initialized");
  stateFromStores2 = tmpResult2.useStateFromStores(items2, () => ContentInventoryOutboxStore.getUserOutbox(closure_0));
  const items3 = [stateFromStores1, ];
  let entries;
  let tmp7 = useMemo;
  if (stateFromStores2 != null) {
    entries = stateFromStores2.entries;
  }
  items3[1] = entries;
  const tmp7Result = tmp7(() => {
    let obj = UserProfileStackedActivityCardUtils;
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores1);
    let found;
    if (stateFromStores2 != null) {
      const entries = stateFromStores2.entries;
      found = entries.filter((extra) => {
        const f125576 = (item) => {
          let result = null != item;
          if (result) {
            const obj = userProfileLiveActivities(closure_2_2[10]);
            result = obj.isMatchingListeningActivity(closure_0, item);
          }
          return result;
        };
        closure_0 = extra;
        let obj = closure_2_0(stateFromStores2[8]);
        let tmp4 = !obj.isEntryLive(extra);
        obj.isEntryLive(extra);
        if (tmp4) {
          let result;
          const tmpResult = closure_2_0(stateFromStores2[9]);
          if (tmpResult.isListenedSessionEntry(extra)) {
            result = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f125576);
            const tmp7 = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f125576);
          } else {
            const tmpResult3 = closure_2_0(stateFromStores2[9]);
            if (tmpResult3.isWatchedMediaEntry(extra)) {
              result = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  const obj = userProfileLiveActivities(closure_2_2[10]);
                  result = obj.isMatchingWatchActivity(closure_0, item);
                }
                return result;
              });
            } else {
              const tmpResult4 = closure_2_0(stateFromStores2[9]);
              result = tmpResult4.isRecentActivityEntry(extra);
            }
          }
          tmp4 = result;
        }
        return tmp4;
      });
    }
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = closure_8;
    }
    const obj2 = { live: userProfileLiveActivities, recent: found };
    if (null == found) {
      found = closure_9;
    }
    return obj2;
  }, items3);
  let obj2 = { live: tmp7Result.live, recent: tmp7Result.recent, stream: tmp4, outbox: stateFromStores2 };
  return obj2;
};
