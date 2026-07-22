// Module ID: 7748
// Function ID: 61534
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7748 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (null != closure_22) {
    let timestamp = closure_22;
  } else {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp;
}
function categorizeTopAffinityFriendAnniversaries(flag) {
  if (flag === undefined) {
    flag = false;
  }
  const result = arg1(dependencyMap[12]).categorizeFriendAnniversariesByAffinity(closure_16, (arg0) => {
    const userAffinity = userAffinity.getUserAffinity(arg0);
    let dmProbability;
    if (null != userAffinity) {
      dmProbability = userAffinity.dmProbability;
    }
    return dmProbability;
  }, flag);
  ({ highestAffinity: closure_17, highAffinity: closure_18 } = result);
}
function updateFriendAnniversaries() {
  let iter3;
  if (null == closure_20) {
    resetFriendAnniversaries();
    if (closure_12.hasConsented(Consents.PERSONALIZATION)) {
      const EnableFriendAnniversaryNotifications = arg1(dependencyMap[13]).EnableFriendAnniversaryNotifications;
      if (EnableFriendAnniversaryNotifications.getSetting()) {
        const tmp12 = _createForOfIteratorHelperLoose(store.getFriendIDs());
        const iter = tmp12();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp15 = closure_13;
            let since = closure_13.getSince(value);
            let tmp17 = closure_10;
            let userAffinity = closure_10.getUserAffinity(value);
            let tmp19 = closure_13;
            let tmp20 = tmp14;
            if (closure_13.isFriend(value)) {
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
                    let tmp26 = closure_0;
                    let tmp27 = closure_2;
                    let obj = closure_0(closure_2[12]);
                    tmp20 = date;
                    if (obj.isFriendAnniversary(date)) {
                      let tmp28 = closure_16;
                      let arr = closure_16.push(value);
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
            let tmp14 = tmp20;
            iter2 = iter3;
          } while (!iter3.done);
        }
        if (0 !== closure_16.length) {
          obj = { location: "PremiumGiftingIntentStore updateFriendAnniversaries" };
          if (obj3.getFriendAnniversaryGateConfig(obj).enabled) {
            const sorted = closure_16.sort((arg0, arg1) => closure_10.compareByDmProbability(arg0, arg1));
            categorizeTopAffinityFriendAnniversaries();
          } else {
            resetFriendAnniversaries();
          }
          const obj3 = arg1(dependencyMap[14]);
        }
      }
    }
  } else {
    generateFriendAnniversaries(closure_20);
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
function generateFriendAnniversaries(closure_20) {
  resetFriendAnniversaries();
  if (obj.getFriendAnniversaryGateConfig({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" }).enabled) {
    const EnableFriendAnniversaryNotifications = arg1(dependencyMap[13]).EnableFriendAnniversaryNotifications;
    if (EnableFriendAnniversaryNotifications.getSetting()) {
      const friendIDs = store.getFriendIDs();
      const found = friendIDs.filter((arg0) => !closure_13.isIgnored(arg0));
      const _Set = Set;
      const set = new Set(found);
      const arg1 = set;
      if (null != _null) {
        if (_null.length === closure_20) {
          const _null = sampleSizeResult;
          const item = sampleSizeResult.forEach((arg0) => {
            const since = closure_13.getSince(arg0);
            if (null != since) {
              const _Date = Date;
              const date = new Date(since);
              const arr = arr.push(arg0);
              const obj = { friendsSince: date };
              closure_19[arg0] = obj;
            }
          });
          const sorted = closure_16.sort((arg0, arg1) => closure_10.compareByDmProbability(arg0, arg1));
          categorizeTopAffinityFriendAnniversaries(true);
        }
        let sampleSizeResult = _null;
      }
      sampleSizeResult = importDefault(dependencyMap[15]).sampleSize(found, closure_20);
      const obj2 = importDefault(dependencyMap[15]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const Consents = arg1(dependencyMap[11]).Consents;
let closure_15 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
let closure_16 = [];
const set = new Set();
const set1 = new Set();
let closure_19 = {};
let closure_20 = null;
let closure_21 = null;
let closure_22 = null;
let tmp4 = (PersistedStore) => {
  class PremiumGiftingIntentStore {
    constructor() {
      self = this;
      tmp = closure_3(this, PremiumGiftingIntentStore);
      obj = closure_6(PremiumGiftingIntentStore);
      tmp2 = closure_5;
      if (closure_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PremiumGiftingIntentStore;
  callback2(PremiumGiftingIntentStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(friendsTabBadgeLastDismissedTime) {
      const self = this;
      let closure_15 = { messageGiftIntentLastShownMap: {}, lastShownFriendsListGiftIntents: [], friendsTabBadgeLastDismissedTime: null, lastKnownGiftIntentDismissedAtMs: 0 };
      if (null != friendsTabBadgeLastDismissedTime) {
        closure_15.friendsTabBadgeLastDismissedTime = friendsTabBadgeLastDismissedTime.friendsTabBadgeLastDismissedTime;
        const _Array = Array;
        closure_15.lastShownFriendsListGiftIntents = Array.from(friendsTabBadgeLastDismissedTime.lastShownFriendsListGiftIntents);
        const obj = {};
        const merged = Object.assign(friendsTabBadgeLastDismissedTime.messageGiftIntentLastShownMap);
        closure_15.messageGiftIntentLastShownMap = obj;
        const lastKnownGiftIntentDismissedAtMs = friendsTabBadgeLastDismissedTime.lastKnownGiftIntentDismissedAtMs;
        let num = 0;
        if (null != lastKnownGiftIntentDismissedAtMs) {
          num = lastKnownGiftIntentDismissedAtMs;
        }
        closure_15.lastKnownGiftIntentDismissedAtMs = num;
        const tmp7 = closure_15;
      }
      const items = [closure_13, closure_10, closure_12, closure_8, closure_9, closure_11];
      self.syncWith(items, closure_28);
      closure_15.messageGiftIntentLastShownMap = PremiumGiftingIntentStore(closure_2[12]).pruneTimestampMap(closure_15.messageGiftIntentLastShownMap, callback4(), 1209600000);
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFriendAnniversaries",
    value() {
      return closure_16;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "canShowFriendsTabBadge",
    value() {
      return function hasNewHighAffinityFriendAnniversaries() {
        return Array.from(closure_18).some((arg0) => {
          const lastShownFriendsListGiftIntents = obj.lastShownFriendsListGiftIntents;
          return !lastShownFriendsListGiftIntents.includes(arg0);
        });
      }();
    }
  };
  items[4] = {
    key: "getFriendAnniversaryYears",
    value(arg0) {
      let num = 0;
      if (null != closure_19[arg0]) {
        num = PremiumGiftingIntentStore(closure_2[12]).yearsSince(tmp.friendsSince);
        const obj = PremiumGiftingIntentStore(closure_2[12]);
      }
      return num;
    }
  };
  items[5] = {
    key: "isGiftIntentMessageInCooldown",
    value(arg0) {
      return null != closure_15.messageGiftIntentLastShownMap[arg0];
    }
  };
  items[6] = {
    key: "getDevToolTotalFriendAnniversaries",
    value() {
      return closure_20;
    }
  };
  items[7] = {
    key: "getDevToolCurrentDate",
    value() {
      return closure_22;
    }
  };
  items[8] = {
    key: "getHighestAffinityFriendAnniversaries",
    value() {
      return Array.from(closure_17);
    }
  };
  items[9] = {
    key: "getHighAffinityFriendAnniversaries",
    value() {
      return Array.from(closure_18);
    }
  };
  items[10] = {
    key: "getMessageGiftIntentLastShownMap",
    value() {
      return closure_15.messageGiftIntentLastShownMap;
    }
  };
  items[11] = {
    key: "getLastKnownGiftIntentDismissedAtMs",
    value() {
      return closure_15.lastKnownGiftIntentDismissedAtMs;
    }
  };
  return callback(PremiumGiftingIntentStore, items);
}(importDefault(dependencyMap[16]).PersistedStore);
tmp4.displayName = "PremiumGiftingIntentStore";
tmp4.persistKey = "PremiumGiftingIntentStore";
const items = [
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
      delete r0.profilePopoutGiftIntentsDismissMap;
    }
    return arg0;
  },
  (arg0) => {
    if (null == arg0) {
      return arg0;
    } else {
      const obj = {};
      const merged = Object.assign(arg0);
      delete r1.giftUnreadNotificationLastDismissedTimes;
      return obj;
    }
  }
];
tmp4.migrations = items;
tmp4 = new tmp4(importDefault(dependencyMap[17]), {
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
    closure_15.messageGiftIntentLastShownMap = arg1(dependencyMap[12]).pruneTimestampMap(obj, getCurrentTime(), 1296000000);
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
      let closure_20 = null;
      let closure_21 = null;
      updateFriendAnniversaries();
    } else {
      generateFriendAnniversaries(total);
    }
  },
  DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function handleDevToolResampleFriendAnniversaries() {
    let flag = null != closure_20;
    if (flag) {
      let closure_21 = null;
      generateFriendAnniversaries(closure_20);
      flag = true;
    }
    return flag;
  },
  DEV_TOOLS_SET_CURRENT_DATE: function handleDevToolSetCurrentDate(date) {

  },
  DEV_TOOLS_RESET_CURRENT_DATE: function handleDevToolResetCurrentDate() {
    let closure_22 = null;
  }
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentStore.tsx");

export default tmp4;
export const FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = 5;
export const FRIENDS_TAB_BADGE_COOLDOWN_MS = 604800000;
