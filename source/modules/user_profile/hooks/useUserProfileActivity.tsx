// Module ID: 11989
// Function ID: 92687
// Name: useUserProfileActivity
// Dependencies: [31, 8731, 4217, 9104, 566, 11990, 7906, 8356, 8352, 2]
// Exports: default

// Module 11989 (useUserProfileActivity)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

let closure_6 = [];
let closure_7 = [];
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores1[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getActivities(closure_0));
  let tmp = stateFromStores(stateFromStores1[3])(arg0);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = _require(stateFromStores1[4]).useStateFromStores(items1, () => outer1_4.getUserOutbox(closure_0));
  const items2 = [stateFromStores, ];
  let entries;
  if (null != stateFromStores1) {
    entries = stateFromStores1.entries;
  }
  items2[1] = entries;
  const tmp4Result = useMemo(() => {
    let found;
    let obj = callback(stateFromStores1[5]);
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores);
    if (null != stateFromStores1) {
      const entries = stateFromStores1.entries;
      found = entries.filter((entry) => {
        let tmp = entry;
        const userProfileLiveActivities = entry;
        const tmp2 = !userProfileLiveActivities(stateFromStores1[6]).isEntryLive(entry);
        if (!tmp2) {
          return tmp2;
        } else {
          if (obj2.isListenedSessionEntry(tmp)) {
            tmp = tmp.extra.entries.length > 0;
            if (tmp) {
              tmp = !userProfileLiveActivities.some((party) => {
                let result = null != party;
                if (result) {
                  result = entry(stateFromStores1[8]).isMatchingListeningActivity(entry, party);
                  const obj = entry(stateFromStores1[8]);
                }
                return result;
              });
            }
            let result = tmp;
          } else {
            if (obj3.isWatchedMediaEntry(tmp)) {
              result = !userProfileLiveActivities.some((details) => {
                let result = null != details;
                if (result) {
                  result = entry(stateFromStores1[8]).isMatchingWatchActivity(entry, details);
                  const obj = entry(stateFromStores1[8]);
                }
                return result;
              });
            } else {
              result = userProfileLiveActivities(stateFromStores1[7]).isRecentActivityEntry(tmp);
              const obj4 = userProfileLiveActivities(stateFromStores1[7]);
            }
            obj3 = userProfileLiveActivities(stateFromStores1[7]);
          }
          obj2 = userProfileLiveActivities(stateFromStores1[7]);
        }
      });
    }
    obj = {};
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = outer1_6;
    }
    obj.live = userProfileLiveActivities;
    if (null == found) {
      found = outer1_7;
    }
    obj.recent = found;
    return obj;
  }, items2);
  obj = { live: tmp4Result.live, recent: tmp4Result.recent, stream: tmp, outbox: stateFromStores1 };
  return obj;
};
