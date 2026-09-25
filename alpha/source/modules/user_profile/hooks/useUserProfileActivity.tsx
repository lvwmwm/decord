// Module ID: 12579
// Function ID: 12580
// Name: useUserProfileActivity
// Dependencies: [19, 8246, 1992, 4869, 4854, 504, 10326, 12580, 7584, 7781, 7777, 2]
// Exports: default

// Module 12579 (useUserProfileActivity)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 4854 */;
import UserProfileStackedActivityCardUtils from "UserProfileStackedActivityCardUtils" /* 12580 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8246 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import PresenceStore from "PresenceStore" /* 4869 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const Features = Constants.Features;
let closure_8 = [];
let closure_9 = [];
let result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  _require = arg0;
  const items = [MediaEngineStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => MediaEngineStore.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[6])(arg0);
  }
  let obj = require("initialize");
  const items1 = [PresenceStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => PresenceStore.getActivities(closure_0));
  let tmpResult = require("initialize");
  const items2 = [ContentInventoryOutboxStore];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => ContentInventoryOutboxStore.getUserOutbox(closure_0));
  const items3 = [stateFromStores1, ];
  let entries;
  if (stateFromStores2 != null) {
    entries = stateFromStores2.entries;
  }
  items3[1] = entries;
  const tmp7Result = useMemo(() => {
    let userProfileLiveActivities = UserProfileStackedActivityCardUtils.getUserProfileLiveActivities(stateFromStores1);
    let found;
    if (stateFromStores2 != null) {
      const entries = stateFromStores2.entries;
      found = entries.filter((item) => {
        let length = item;
        userProfileLiveActivities = item;
        const isEntryLiveResult = userProfileLiveActivities(stateFromStores2[8]).isEntryLive(item);
        if (isEntryLiveResult) {
          return !isEntryLiveResult;
        } else {
          if (tmpResult.isListenedSessionEntry(length)) {
            length = length.extra.entries.length;
            let tmp6 = length > 0;
            if (tmp6) {
              length = userProfileLiveActivities;
              tmp6 = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(7777).isMatchingListeningActivity(closure_0, item);
                  const obj = userProfileLiveActivities(7777);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            if (tmpResult3.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(7777).isMatchingWatchActivity(closure_0, item);
                  const obj = userProfileLiveActivities(7777);
                }
                return result;
              });
            } else {
              result = tmp(tmp2[9]).isRecentActivityEntry(length);
              const tmpResult4 = tmp(tmp2[9]);
            }
            tmpResult3 = tmp(tmp2[9]);
          }
          tmpResult = tmp(tmp2[9]);
        }
      });
    }
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = closure_8;
    }
    const obj2 = { live: userProfileLiveActivities, recent: null };
    if (null == found) {
      found = closure_9;
    }
    obj2.recent = found;
    return obj2;
  }, items3);
  return { live: tmp7Result.live, recent: tmp7Result.recent, stream: tmp4, outbox: stateFromStores2 };
};
