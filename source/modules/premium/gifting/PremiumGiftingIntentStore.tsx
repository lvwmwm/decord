// Module ID: 7847
// Function ID: 61898
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 1188, 6901, 1316, 5590, 3767, 653, 7848, 3803, 7849, 22, 566, 686, 2]

// Module 7847 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import apply from "apply";
import dispatcher from "dispatcher";
import closure_7 from "set";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { Consents } from "ME";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getCurrentTime() {
  if (null != c22) {
    let timestamp = c22;
  } else {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp;
}
function categorizeTopAffinityFriendAnniversaries(flag) {
  let set;
  let set1;
  if (flag === undefined) {
    flag = false;
  }
  const result = require(7848) /* _createForOfIteratorHelperLoose */.categorizeFriendAnniversariesByAffinity(closure_16, (arg0) => {
    const userAffinity = outer1_10.getUserAffinity(arg0);
    let dmProbability;
    if (null != userAffinity) {
      dmProbability = userAffinity.dmProbability;
    }
    return dmProbability;
  }, flag);
  ({ highestAffinity: set, highAffinity: set1 } = result);
}
function updateFriendAnniversaries() {
  let arr;
  let iter3;
  if (null == c20) {
    resetFriendAnniversaries();
    if (closure_12.hasConsented(Consents.PERSONALIZATION)) {
      const EnableFriendAnniversaryNotifications = require(3803) /* explicitContentFromProto */.EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        const tmp12 = _createForOfIteratorHelperLoose(store.getFriendIDs());
        const iter = tmp12();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp15 = store;
            let since = store.getSince(value);
            let tmp17 = userAffinity;
            userAffinity = userAffinity.getUserAffinity(value);
            let tmp19 = store;
            let tmp20 = tmp14;
            if (store.isFriend(value)) {
              tmp20 = tmp14;
              if (null != userAffinity) {
                tmp20 = tmp14;
                if (userAffinity.dmProbability > 0) {
                  tmp20 = tmp14;
                  if (null != since) {
                    let _Date = Date;
                    let tmp21 = new.target;
                    let tmp22 = new.target;
                    let tmp23 = since;
                    let date = new Date(since);
                    let tmp25 = date;
                    let tmp26 = require;
                    let tmp27 = dependencyMap;
                    let obj = require(7848) /* _createForOfIteratorHelperLoose */;
                    tmp20 = date;
                    if (obj.isFriendAnniversary(date)) {
                      let tmp28 = arr;
                      arr = arr.push(value);
                      let tmp30 = closure_19;
                      obj = { friendsSince: date };
                      closure_19[value] = obj;
                      tmp20 = date;
                    }
                  }
                }
              }
            }
            iter3 = tmp12();
            tmp14 = tmp20;
            iter2 = iter3;
          } while (!iter3.done);
        }
        if (0 !== arr.length) {
          obj = { location: "PremiumGiftingIntentStore updateFriendAnniversaries" };
          if (obj3.getFriendAnniversaryGateConfig(obj).enabled) {
            const sorted = arr.sort((arg0, arg1) => outer1_10.compareByDmProbability(arg0, arg1));
            categorizeTopAffinityFriendAnniversaries();
          } else {
            resetFriendAnniversaries();
          }
          obj3 = require(7849) /* getFriendAnniversaryGateConfig */;
        }
      }
    }
  } else {
    generateFriendAnniversaries(c20);
  }
}
function resetFriendAnniversaries() {
  closure_16.length = 0;
  const set = new Set();
  const set1 = new Set();
  let closure_19 = {};
}
function maybeUpdateMessageGiftIntentLastShownMap(recipientUserId) {
  if (null == closure_15.messageGiftIntentLastShownMap[recipientUserId]) {
    closure_15.messageGiftIntentLastShownMap[recipientUserId] = getCurrentTime();
  }
}
function generateFriendAnniversaries(c20) {
  resetFriendAnniversaries();
  if (obj.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled) {
    const EnableFriendAnniversaryNotifications = set(3803).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      let closure_20 = c20;
      const friendIDs = store.getFriendIDs();
      const found = friendIDs.filter((arg0) => !outer1_13.isIgnored(arg0));
      const _Set = Set;
      set = new Set(found);
      if (null != _null) {
        if (_null.length === c20) {
          _null = sampleSizeResult;
          const item = sampleSizeResult.forEach((arg0) => {
            const since = outer1_13.getSince(arg0);
            if (null != since) {
              const _Date = Date;
              const date = new Date(since);
              outer1_16.push(arg0);
              const obj = { friendsSince: date };
              outer1_19[arg0] = obj;
            }
          });
          const sorted = arr.sort((arg0, arg1) => outer1_10.compareByDmProbability(arg0, arg1));
          categorizeTopAffinityFriendAnniversaries(true);
        }
        sampleSizeResult = _null;
      }
      sampleSizeResult = importDefault(22).sampleSize(found, c20);
      const obj2 = importDefault(22);
    }
  }
}
let closure_15 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
let closure_16 = [];
let set = new Set();
let set1 = new Set();
let closure_19 = {};
let c20 = null;
let c21 = null;
let c22 = null;
let tmp4 = ((PersistedStore) => {
  class PremiumGiftingIntentStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, PremiumGiftingIntentStore);
      obj = outer1_6(PremiumGiftingIntentStore);
      tmp2 = outer1_5;
      if (outer1_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PremiumGiftingIntentStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(friendsTabBadgeLastDismissedTime) {
      const self = this;
      const outer1_15 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
      if (null != friendsTabBadgeLastDismissedTime) {
        outer1_15.friendsTabBadgeLastDismissedTime = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
        const _Array = Array;
        outer1_15.lastShownFriendsListGiftIntents = Array.from(friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents);
        const obj = {};
        const merged = Object.assign(friendsTabBadgeLastDismissedTime.messageGiftIntentLastShownMap);
        outer1_15.messageGiftIntentLastShownMap = obj;
        const lastKnownGiftIntentDismissedAtMs = friendsTabBadgeLastDismissedTime.lastKnownGiftIntentDismissedAtMs;
        let num = 0;
        if (null != lastKnownGiftIntentDismissedAtMs) {
          num = lastKnownGiftIntentDismissedAtMs;
        }
        outer1_15.lastKnownGiftIntentDismissedAtMs = num;
        const tmp7 = outer1_15;
      }
      const items = [outer1_13, outer1_10, outer1_12, outer1_8, outer1_9, outer1_11];
      self.syncWith(items, outer1_28);
      outer1_15.messageGiftIntentLastShownMap = PremiumGiftingIntentStore(outer1_2[12]).pruneTimestampMap(outer1_15.messageGiftIntentLastShownMap, outer1_26(), 1209600000);
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFriendAnniversaries",
    value() {
      return outer1_16;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canShowFriendsTabBadge",
    value() {
      return (function hasNewHighAffinityFriendAnniversaries() {
        return Array.from(outer2_18).some((arg0) => {
          const lastShownFriendsListGiftIntents = outer3_15.lastShownFriendsListGiftIntents;
          return !lastShownFriendsListGiftIntents.includes(arg0);
        });
      })();
    }
  };
  items[4] = {
    key: "getFriendAnniversaryYears",
    value(arg0) {
      let num = 0;
      if (null != outer1_19[arg0]) {
        num = PremiumGiftingIntentStore(outer1_2[12]).yearsSince(tmp.friendsSince);
        const obj = PremiumGiftingIntentStore(outer1_2[12]);
      }
      return num;
    }
  };
  items[5] = {
    key: "isGiftIntentMessageInCooldown",
    value(arg0) {
      return null != outer1_15.messageGiftIntentLastShownMap[arg0];
    }
  };
  items[6] = {
    key: "getDevToolTotalFriendAnniversaries",
    value() {
      return outer1_20;
    }
  };
  items[7] = {
    key: "getDevToolCurrentDate",
    value() {
      return outer1_22;
    }
  };
  items[8] = {
    key: "getHighestAffinityFriendAnniversaries",
    value() {
      return Array.from(outer1_17);
    }
  };
  items[9] = {
    key: "getHighAffinityFriendAnniversaries",
    value() {
      return Array.from(outer1_18);
    }
  };
  items[10] = {
    key: "getMessageGiftIntentLastShownMap",
    value() {
      return outer1_15.messageGiftIntentLastShownMap;
    }
  };
  items[11] = {
    key: "getLastKnownGiftIntentDismissedAtMs",
    value() {
      return outer1_15.lastKnownGiftIntentDismissedAtMs;
    }
  };
  return callback(PremiumGiftingIntentStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "PremiumGiftingIntentStore";
tmp4.persistKey = "PremiumGiftingIntentStore";
let items = [
  (friendsTabBadgeLastDismissedTime) => {
    let tmp = friendsTabBadgeLastDismissedTime;
    if (null != friendsTabBadgeLastDismissedTime) {
      const obj = {};
      friendsTabBadgeLastDismissedTime = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
      let tmp2 = null;
      if (null != friendsTabBadgeLastDismissedTime) {
        tmp2 = friendsTabBadgeLastDismissedTime;
      }
      obj.friendsTabBadgeLastDismissedTime = tmp2;
      let prop = friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents;
      if (null == prop) {
        prop = [];
      }
      obj.lastShownFriendsListGiftIntents = prop;
      obj.messageGiftIntentLastShownMap = {};
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      const obj = { friendsTabBadgeLastDismissedTime: null };
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (null == prop) {
        prop = [];
      }
      obj.lastShownFriendsListGiftIntents = prop;
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (null == prop1) {
        prop1 = {};
      }
      obj.messageGiftIntentLastShownMap = prop1;
      obj.giftUnreadNotificationLastDismissedTimes = [];
      tmp = obj;
    }
    return tmp;
  },
  (lastShownFriendsListGiftIntents) => {
    let tmp = lastShownFriendsListGiftIntents;
    if (null != lastShownFriendsListGiftIntents) {
      const obj = { friendsTabBadgeLastDismissedTime: null };
      let prop = lastShownFriendsListGiftIntents.lastShownFriendsListGiftIntents;
      if (null == prop) {
        prop = [];
      }
      obj.lastShownFriendsListGiftIntents = prop;
      let prop1 = lastShownFriendsListGiftIntents.messageGiftIntentLastShownMap;
      if (null == prop1) {
        prop1 = {};
      }
      obj.messageGiftIntentLastShownMap = prop1;
      let prop2 = lastShownFriendsListGiftIntents.giftUnreadNotificationLastDismissedTimes;
      if (null == prop2) {
        prop2 = [];
      }
      obj.giftUnreadNotificationLastDismissedTimes = prop2;
      obj.profilePopoutGiftIntentsDismissMap = {};
      tmp = obj;
    }
    return tmp;
  },
  (lastKnownGiftIntentDismissedAtMs) => {
    let tmp = lastKnownGiftIntentDismissedAtMs;
    if (null != lastKnownGiftIntentDismissedAtMs) {
      const obj = {};
      const merged = Object.assign(lastKnownGiftIntentDismissedAtMs);
      lastKnownGiftIntentDismissedAtMs = lastKnownGiftIntentDismissedAtMs.lastKnownGiftIntentDismissedAtMs;
      let num = 0;
      if (null != lastKnownGiftIntentDismissedAtMs) {
        num = lastKnownGiftIntentDismissedAtMs;
      }
      obj["lastKnownGiftIntentDismissedAtMs"] = num;
      tmp = obj;
    }
    return tmp;
  },
  (arg0) => {
    if (null != arg0) {
      delete tmp.profilePopoutGiftIntentsDismissMap;
    }
    return arg0;
  },
  (arg0) => {
    if (null == arg0) {
      return arg0;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      delete tmp.giftUnreadNotificationLastDismissedTimes;
      return obj;
    }
  }
];
tmp4.migrations = items;
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    resetFriendAnniversaries();
  },
  LOGOUT: function handleLogout() {
    let closure_15 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
    resetFriendAnniversaries();
  },
  MESSAGE_GIFT_INTENT_SHOWN: function handleMessageGiftIntentShown(recipientUserId) {
    maybeUpdateMessageGiftIntentLastShownMap(recipientUserId.recipientUserId);
  },
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: function handleFriendsListGiftIntentsShown() {
    closure_15.lastShownFriendsListGiftIntents = Array.from(closure_16);
  },
  GIFT_INTENT_FLOW_PURCHASED_GIFT: function handleGiftIntentFlowPurchasedGift(recipientUserId) {
    maybeUpdateMessageGiftIntentLastShownMap(recipientUserId.recipientUserId);
  },
  GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function handleGiftIntentDismissalsFetchSuccess(arg0) {
    let dismissals;
    let dismissedAtMs;
    let iter2;
    let settingsTimestampMs;
    let targetId;
    const obj = {};
    ({ dismissals, settingsTimestampMs } = arg0);
    const merged = Object.assign(closure_15.messageGiftIntentLastShownMap);
    const tmp2 = _createForOfIteratorHelperLoose(dismissals);
    let iter = tmp2();
    if (!iter.done) {
      do {
        ({ targetId, dismissedAtMs } = iter.value);
        let tmp3 = obj[targetId];
        let bound = dismissedAtMs;
        if (null != tmp3) {
          let _Math = Math;
          bound = Math.max(tmp3, dismissedAtMs);
        }
        obj[targetId] = bound;
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    closure_15.messageGiftIntentLastShownMap = require(7848) /* _createForOfIteratorHelperLoose */.pruneTimestampMap(obj, getCurrentTime(), 1296000000);
    closure_15.lastKnownGiftIntentDismissedAtMs = settingsTimestampMs;
  },
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function handleDevToolResetFriendsListGiftIntentsShown() {
    closure_15.lastShownFriendsListGiftIntents = [];
  },
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function handleDevToolResetGiftMessageCooldown() {
    closure_15.messageGiftIntentLastShownMap = {};
  },
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function handleDevToolSetFriendAnniversaryCount(total) {
    total = total.total;
    if (null == total) {
      let c20 = null;
      let c21 = null;
      updateFriendAnniversaries();
    } else {
      generateFriendAnniversaries(total);
    }
  },
  DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function handleDevToolResampleFriendAnniversaries() {
    let flag = null != c20;
    if (flag) {
      let c21 = null;
      generateFriendAnniversaries(c20);
      flag = true;
    }
    return flag;
  },
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {

  },
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    let c22 = null;
  }
});
let result = set.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default tmp4;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;
