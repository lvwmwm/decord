// Module ID: 13113
// Function ID: 13114
// Name: useUserProfileActivity
// Dependencies: [19, 8977, 2012, 5107, 5116, 558, 576, 504, 10207, 13114, 8255, 8443, 8439, 2]

// Module 13113 (useUserProfileActivity)
import react from "react" /* 19 */;
import Constants from "Constants" /* 5116 */;
import utils from "utils" /* 8255 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8443 */;
import UserProfileStackedActivityCardUtils from "UserProfileStackedActivityCardUtils" /* 13114 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8977 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const useMemo = react.useMemo;
const Features = Constants.Features;
let closure_8 = [];
let closure_9 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileActivity(arg0) {
  let live;
  let recent;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp9;
  let userProfileLiveActivities;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function y() {
      return MediaEngineStore.supports(constants.VIDEO);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (stateFromStores) {
    tmp8 = userProfileLiveActivities(10207)(arg0);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
    cResult[3] = arg0;
    cResult[4] = S;
    tmp11 = S;
  } else {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
  }
  let tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
    const items2 = [ContentInventoryOutboxStore];
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
  }
  if (cResult[6] !== arg0) {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
    cResult[6] = arg0;
    cResult[7] = tmp15;
    tmp14 = tmp15;
  } else {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp14);
  if (cResult[8] === stateFromStores1) {
    let tmp19;
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
    const tmp17 = cResult[9];
    if (stateFromStores2 != null) {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
    }
    if (tmp17 === tmp18) {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
      userProfileLiveActivities = arr4;
      tmp19 = cResult[11];
    }
    if (0 === arr4.length) {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
    }
    if (null == tmp19) {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
    } else {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
    }
    if (cResult[12] === arr4) {
      class S {
        constructor() {
          return PresenceStore.getActivities(closure_0);
        }
      }
      ({ live, recent } = tmp22);
      if (cResult[15] === live) {
        class S {
          constructor() {
            return PresenceStore.getActivities(closure_0);
          }
        }
      }
      const obj2 = { live, recent, stream: tmp8, outbox: stateFromStores2 };
      cResult[15] = live;
      cResult[16] = stateFromStores2;
      cResult[17] = recent;
      cResult[18] = tmp8;
      cResult[19] = obj2;
    }
    const obj3 = { live: arr4, recent: tmp19 };
    cResult[12] = arr4;
    cResult[13] = tmp19;
    cResult[14] = obj3;
    tmp22 = obj3;
  }
  const tmpResult6 = require("UserProfileStackedActivityCardUtils");
  userProfileLiveActivities = tmpResult6.getUserProfileLiveActivities(stateFromStores1);
  let found;
  if (stateFromStores2 != null) {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
    found = arr5.filter((extra) => {
      const f144832 = (item) => {
        let result = null != item;
        if (result) {
          const obj = closure_2_0(closure_2_2[12]);
          result = obj.isMatchingListeningActivity(closure_0, item);
        }
        return result;
      };
      closure_0 = extra;
      let obj = utils;
      let tmp4 = !obj.isEntryLive(extra);
      obj.isEntryLive(extra);
      if (tmp4) {
        let result;
        const tmpResult = ContentInventoryTypes;
        if (tmpResult.isListenedSessionEntry(extra)) {
          result = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f144832);
          const tmp7 = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f144832);
        } else {
          const tmpResult3 = ContentInventoryTypes;
          if (tmpResult3.isWatchedMediaEntry(extra)) {
            result = !userProfileLiveActivities.some((item) => {
              let result = null != item;
              if (result) {
                const obj = closure_2_0(closure_2_2[12]);
                result = obj.isMatchingWatchActivity(closure_0, item);
              }
              return result;
            });
          } else {
            const tmpResult4 = ContentInventoryTypes;
            result = tmpResult4.isRecentActivityEntry(extra);
          }
        }
        tmp4 = result;
      }
      return tmp4;
    });
  }
  cResult[8] = stateFromStores1;
  if (stateFromStores2 != null) {
    class S {
      constructor() {
        return PresenceStore.getActivities(closure_0);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = userProfileLiveActivities;
  cResult[11] = found;
  tmp19 = found;
}) : (function useUserProfileActivity(arg0) {
  let stateFromStores1;
  let stateFromStores2;
  _require = arg0;
  const tmp2 = stateFromStores2;
  let obj = require("get initialized");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[8])(arg0);
  }
  let tmpResult = tmp(tmp2[7]);
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
        const f154811 = (item) => {
          let result = null != item;
          if (result) {
            const obj = userProfileLiveActivities(closure_2_2[12]);
            result = obj.isMatchingListeningActivity(closure_0, item);
          }
          return result;
        };
        closure_0 = extra;
        let obj = closure_2_0(stateFromStores2[10]);
        let tmp4 = !obj.isEntryLive(extra);
        obj.isEntryLive(extra);
        if (tmp4) {
          let result;
          const tmpResult = closure_2_0(stateFromStores2[11]);
          if (tmpResult.isListenedSessionEntry(extra)) {
            result = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f154811);
            const tmp7 = extra.extra.entries.length > 0 && !userProfileLiveActivities.some(f154811);
          } else {
            const tmpResult3 = closure_2_0(stateFromStores2[11]);
            if (tmpResult3.isWatchedMediaEntry(extra)) {
              result = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  const obj = userProfileLiveActivities(closure_2_2[12]);
                  result = obj.isMatchingWatchActivity(closure_0, item);
                }
                return result;
              });
            } else {
              const tmpResult4 = closure_2_0(stateFromStores2[11]);
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
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default tmp2;
