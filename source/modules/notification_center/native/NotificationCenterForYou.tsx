// Module ID: 15185
// Function ID: 115583
// Name: isHoisted
// Dependencies: [57, 31, 27, 6878, 4142, 1849, 6881, 15186, 653, 8811, 4326, 33, 6882, 1457, 3981, 3803, 1450, 3808, 15187, 566, 15189, 14961, 4345, 21, 6883, 4111, 668, 22, 675, 15188, 15190, 8604, 480, 15191, 15192, 2]
// Exports: NotificationCenterForYou

// Module 15185 (isHoisted)
import _slicedToArray from "_slicedToArray";
import trackImpression from "trackImpression";
import { View } from "apply";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import MODE_CHANGE_PHYSICS from "MODE_CHANGE_PHYSICS";
import { ReadStateTypes } from "ReadStateTypes";
import { jsx } from "ForYouMentionPlaceholder";
import set from "get ActivityIndicator";

let RootNavigatorScreen;
let YouBarNavigatorScreens;
const require = arg1;
function isHoisted(type) {
  return type.type === require(6882) /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
}
({ RootNavigatorScreen, YouBarNavigatorScreens } = MODE_CHANGE_PHYSICS);
let items = [, , , , ];
({ YOU: arr[0], SETTINGS: arr[1] } = RootNavigatorScreen);
({ GUILDS: arr[2], ICYMI: arr[3], NOTIFICATIONS: arr[4] } = YouBarNavigatorScreens);
let set = new Set(items);
let result = set.fileFinishedImporting("modules/notification_center/native/NotificationCenterForYou.tsx");

export const NotificationCenterForYou = (panelVariant) => {
  let loadMore;
  let loadingMore;
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.panelVariant = 0;
  let isFocused;
  let currentNavigationRouteName;
  let setting;
  let memo;
  let height;
  let c5;
  let initialized;
  let hasMore;
  let items;
  let setReadNotifItemToAcked;
  let errored;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  let first;
  let c16;
  let c17;
  let first1;
  let first2;
  let closure_20;
  let closure_21;
  let closure_22;
  let callback3;
  let setAdded;
  let friendSuggestions;
  let shouldAgeVerifyForAgeGate;
  let memo2;
  const merged = Object.assign(panelVariant, obj);
  obj = isFocused(setting[13]);
  isFocused = obj.useIsFocused();
  let obj1 = isFocused(setting[14]);
  currentNavigationRouteName = obj1.useCurrentNavigationRouteName();
  const NotificationCenterAckedBeforeId = isFocused(setting[15]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  items = [currentNavigationRouteName, isFocused];
  memo = height.useMemo(() => {
    let tmp2 = !isFocused;
    const hasItem = first.has(currentNavigationRouteName);
    if (tmp2) {
      tmp2 = currentNavigationRouteName !== stateFromStores1.NOTIFICATIONS;
    }
    if (tmp2) {
      tmp2 = hasItem;
    }
    return tmp2;
  }, items);
  height = currentNavigationRouteName(setting[16])().height;
  const ChannelListLayoutSetting = isFocused(setting[15]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === isFocused(setting[17]).ChannelListLayoutTypes.COMPACT;
  c5 = tmp8;
  let items1 = [tmp8, height];
  const memo1 = height.useMemo(() => {
    let num = 68;
    if (c5) {
      num = 48;
    }
    return Math.min(50, Math.max(8, Math.ceil(height / num)));
  }, items1);
  let obj2 = isFocused(setting[18]);
  const notificationCenterItemsLoader = obj2.useNotificationCenterItemsLoader({ isFocused, navigatedAway: memo, withMentions: true, initialPageSize: memo1 });
  initialized = notificationCenterItemsLoader.initialized;
  hasMore = notificationCenterItemsLoader.hasMore;
  items = notificationCenterItemsLoader.items;
  setReadNotifItemToAcked = notificationCenterItemsLoader.setReadNotifItemToAcked;
  errored = notificationCenterItemsLoader.errored;
  ({ loadMore, loadingMore } = notificationCenterItemsLoader);
  let obj3 = isFocused(setting[19]);
  let items2 = [errored];
  stateFromStores = obj3.useStateFromStores(items2, () => errored.hasNewMentions());
  let items3 = [setReadNotifItemToAcked];
  stateFromStores1 = isFocused(setting[19]).useStateFromStores(items3, () => setReadNotifItemToAcked.localItems, []);
  const obj5 = isFocused(setting[19]);
  const getOrFetchNotificationCenterItemsApplications = isFocused(setting[20]).useGetOrFetchNotificationCenterItemsApplications(stateFromStores1);
  const obj6 = isFocused(setting[20]);
  let items4 = [items, hasMore];
  stateFromStores2 = isFocused(setting[19]).useStateFromStores(items4, () => {
    const currentUser = items.getCurrentUser();
    let ackMessageIdResult = null;
    if (null != currentUser) {
      ackMessageIdResult = hasMore.ackMessageId(currentUser.id, stateFromStores2.NOTIFICATION_CENTER);
    }
    return ackMessageIdResult;
  });
  const obj7 = isFocused(setting[19]);
  let items5 = [initialized];
  stateFromStores3 = isFocused(setting[19]).useStateFromStores(items5, () => initialized.getTotalNotificationsMentionCount(true));
  const tmp16 = memo(height.useState(stateFromStores2), 2);
  first = tmp16[0];
  c16 = tmp18;
  let tmp19 = memo(height.useState(false), 2);
  c17 = tmp20;
  const obj8 = isFocused(setting[19]);
  first1 = memo(height.useState(Date.now()), 2)[0];
  let tmp21 = memo(height.useState(Date.now()), 2);
  const tmp24 = memo(height.useState(new Set()), 2);
  first2 = tmp24[0];
  closure_20 = tmp24[1];
  let items6 = [first2];
  let items7 = [first2];
  const callback = height.useCallback((arg0) => first2.has(arg0), items6);
  const callback1 = height.useCallback((forceUnacked) => {
    if (!forceUnacked.forceUnacked) {
      if (!first2.has(forceUnacked.id)) {
        const _Set = Set;
        const set = new Set(first2);
        set.add(forceUnacked.id);
        callback(set);
      }
    }
  }, items7);
  let set = new Set();
  closure_21 = height.useRef(new Set());
  const set1 = new Set();
  closure_22 = height.useRef(new Set());
  const callback2 = height.useCallback((id) => {
    const current = ref.current;
    current.add(id.id);
  }, []);
  callback3 = height.useCallback((id) => {
    const current = ref.current;
    return current.has(id.id);
  }, []);
  const tmp32 = currentNavigationRouteName(setting[21])();
  setAdded = tmp32.setAdded;
  friendSuggestions = tmp32.friendSuggestions;
  let items8 = [setAdded];
  let items9 = [setAdded];
  const callback4 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arg0) => {
      const items = [...arg0, closure_0];
      return items;
    });
  }, items8);
  const callback5 = height.useCallback((arg0) => {
    let closure_0 = arg0;
    setAdded((arr) => arr.filter((user) => user.user.id !== outer1_0.user.id));
  }, items9);
  const set2 = new Set();
  shouldAgeVerifyForAgeGate = isFocused(setting[22]).useShouldAgeVerifyForAgeGate();
  let items10 = [items, hasMore, stateFromStores1, friendSuggestions, initialized, stateFromStores, errored, setting, first, setReadNotifItemToAcked, callback3, stateFromStores3, shouldAgeVerifyForAgeGate];
  memo2 = height.useMemo(() => {
    function sortBySnowflake(items1) {
      const sorted = items1.sort((id, id2) => -1 * currentNavigationRouteName(setting[23]).compare(id.id, id2.id));
    }
    let id;
    if (items.length > 0) {
      id = items[items.length - 1].id;
    }
    if (hasMore) {
      if (null != id) {
        let found = stateFromStores1.filter((forceUnacked) => {
          forceUnacked = forceUnacked.forceUnacked;
          if (!forceUnacked) {
            forceUnacked = currentNavigationRouteName(setting[23]).compare(forceUnacked.id, id) > 0;
            const obj = currentNavigationRouteName(setting[23]);
          }
          return forceUnacked;
        });
      }
      items = [];
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(items, 0));
      let found1 = items;
      if (shouldAgeVerifyForAgeGate) {
        found1 = items.filter((kind) => {
          let tmp = "notification-center-item" !== kind.kind;
          if (!tmp) {
            tmp = !isFocused(setting[22]).shouldShowAgeGateForChannelId(kind.message_channel_id);
            const obj = isFocused(setting[22]);
          }
          return tmp;
        });
      }
      let items1 = [];
      let arr6 = items1;
      const items2 = [];
      const items3 = [];
      const item = found1.forEach((kind) => {
        let addResult = kind;
        if ("notification-center-item" === kind.kind) {
          if (null != addResult.local_id) {
            let tmp22 = !addResult.acked;
            if (tmp22) {
              tmp22 = !errored.isLocalItemAcked(addResult);
            }
            let flag = tmp22;
          } else {
            if (obj4.isMentionItem(addResult)) {
              if (!addResult.acked) {
                if (null != addResult.message_channel_id) {
                  const current = outer1_21.current;
                  if (!current.has(addResult.id)) {
                    const ackMessageIdResult = hasMore.ackMessageId(addResult.message_channel_id);
                    if (obj.compare(addResult.message_id, ackMessageIdResult) <= 0) {
                      outer1_9(addResult);
                      flag = false;
                    }
                    obj = currentNavigationRouteName(setting[23]);
                  }
                }
                if (null != outer1_15) {
                  flag = currentNavigationRouteName(setting[23]).compare(addResult.id, outer1_15) > 0;
                  const obj2 = currentNavigationRouteName(setting[23]);
                }
              }
            }
            obj4 = isFocused(setting[24]);
            const isRemoteAckedResult = isFocused(setting[24]).isRemoteAcked(addResult, items2);
            if ("go_live_push" === addResult.type) {
              if (null != addResult.deeplink) {
                let tmp17 = currentNavigationRouteName(setting[25])(addResult.deeplink).payload.type === isFocused(setting[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
                const tmp21 = currentNavigationRouteName(setting[25])(addResult.deeplink).payload.type === isFocused(setting[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
              }
              flag = tmp17;
            }
            tmp17 = !isRemoteAckedResult;
            const obj3 = isFocused(setting[24]);
          }
          if (!flag) {
            outer1_9(addResult);
          }
          const current2 = outer1_22.current;
          if (current2.has(addResult.id)) {
            arr6.push(addResult);
            addResult.acked = false;
            const current3 = outer1_21.current;
            addResult = current3.add(addResult.id);
          } else if (!callback(addResult)) {
            if (!flag) {
              items3.push(addResult);
            }
          } else {
            arr6.push(addResult);
          }
          items2.push(addResult);
        }
      });
      sortBySnowflake(items1);
      sortBySnowflake(items2);
      sortBySnowflake(items3);
      let obj = currentNavigationRouteName(setting[27]);
      const tmp19 = memo(obj.partition(items1, (type) => type.type === isFocused(setting[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && type.acked), 2);
      const first = tmp19[0];
      arr6 = tmp19[1];
      if (first.length > 3) {
        obj = { kind: "notification-center-item", type: isFocused(setting[12]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED, id: first[0].id, local_id: "friend_requests_grouped", acked: false, other_user: first[0].other_user, other_users: first.map((other_user) => other_user.other_user), forceUnacked: true };
        arr6.push(obj);
        items1 = arr6;
      }
      const item1 = items1.forEach((arg0) => {
        const tmp = !outer1_23(arg0);
        arg0.enableBadge = tmp;
        return tmp;
      });
      const items4 = [];
      if (friendSuggestions.length > 0) {
        obj = { kind: "suggested-friends-header", id: "suggested-friends-header", showDivider: items1.length > 0 };
        items4.push(obj);
        let num7 = 2;
        if (friendSuggestions.length <= 3) {
          num7 = friendSuggestions.length;
        }
        const _Math = Math;
        const substr = friendSuggestions.slice(0, Math.min(friendSuggestions.length, num7));
        const item2 = substr.forEach((id) => {
          items4.push({ kind: "suggested-friends-row", id: id.user.id, suggestedFriend: id });
        });
        if (friendSuggestions.length > 3) {
          const obj1 = { kind: "suggested-friends-show-all-row", id: "suggested-friends-show-all-row", suggestedFriends: friendSuggestions };
          items4.push(obj1);
        }
      }
      const items5 = [];
      HermesBuiltin.arraySpread(items3, HermesBuiltin.arraySpread(items2, 0));
      let num9 = 0;
      if (initialized) {
        num9 = 0;
        if (stateFromStores) {
          const _Math2 = Math;
          const _Math3 = Math;
          const bound = Math.min(Math.max(stateFromStores3, 1), 6);
          let num11 = 0;
          num9 = bound;
          if (0 < bound) {
            do {
              let obj2 = { kind: "mentions-placeholder" };
              let _HermesInternal = HermesInternal;
              obj2.id = "mp-" + num11;
              let arr2 = items5.unshift(obj2);
              num11 = num11 + 1;
              num9 = bound;
            } while (num11 < bound);
          }
        }
      }
      if (errored) {
        items5.push({ kind: "load-more", id: "load-more" });
      }
      let obj3 = { kind: "recent-activity-section-header", id: "rash" };
      if (items1.length > 0) {
        items1.unshift({ kind: "hoisted-items-header", id: "hoisted-items-header" });
      }
      const items6 = [];
      if (items1.length > 0) {
        const spliceResult = items5.splice(0, 3);
        const push3 = items6.push;
        const items7 = [];
        HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(items1, 0));
        HermesBuiltin.apply(items7, items6);
        if (tmp74) {
          items6.push(obj3);
        }
        const push4 = items6.push;
        const items8 = [];
        HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(spliceResult, 0));
        HermesBuiltin.apply(items8, items6);
        tmp74 = spliceResult.length > 0 || items5.length > 0;
      } else {
        let num12 = 3;
        if (items2.length > 0) {
          num12 = 3;
          if (items5.length > 0) {
            num12 = 3;
            if ("mentions-placeholder" === items5[0].kind) {
              num12 = num9 + items2.length - 1;
            }
          }
        }
        const spliceResult1 = items5.splice(0, num12);
        let flag = false;
        if (tmp45) {
          arr6 = items6.push(obj3);
          flag = true;
        }
        const push = items6.push;
        const items9 = [];
        HermesBuiltin.arraySpread(items4, HermesBuiltin.arraySpread(spliceResult1, 0));
        HermesBuiltin.apply(items9, items6);
        let tmp56 = !flag;
        if (!flag) {
          tmp56 = items5.length > 0;
        }
        if (tmp56) {
          items6.push(obj3);
        }
        const push2 = items6.push;
        const items10 = [];
        HermesBuiltin.arraySpread(items5, 0);
        HermesBuiltin.apply(items10, items6);
        tmp45 = 0 === items4.length && items5.length > 0;
      }
      return items6;
    }
    found = stateFromStores1;
  }, items10);
  const items11 = [initialized, first1];
  const layoutEffect = height.useLayoutEffect(() => {
    if (initialized) {
      let obj = currentNavigationRouteName(setting[28]);
      obj = { version: "v2", load_start_timestamp: first1 };
      const _Date = Date;
      obj.tti_millis = Date.now() - first1;
      obj.track(stateFromStores.NOTIFICATION_CENTER_LOADED, obj);
    }
  }, items11);
  const items12 = [memo, stateFromStores2, first, memo2, setting, tmp16[1], callback3];
  const effect = height.useEffect(() => {
    if (memo) {
      const found = memo2.filter((kind) => "notification-center-item" === kind.kind);
      const current = ref.current;
      current.clear();
      const item = found.forEach((arg0) => {
        if (!callback(arg0)) {
          arg0.enableBadge = false;
        }
      });
      if (stateFromStores2 !== first) {
        _undefined(stateFromStores2);
        const found1 = found.filter((local_id) => {
          let tmp = null != local_id.local_id;
          if (tmp) {
            tmp = !errored.isLocalItemAcked(local_id);
          }
          return tmp;
        });
        const mapped = found1.map((local_id) => local_id.local_id);
        const result = isFocused(setting[29]).markNotificationCenterLocalItemsAcked(mapped);
        const obj = isFocused(setting[29]);
        const result1 = isFocused(setting[29]).bulkMarkNotificationCenterItemsAcked(found.filter((addResult) => !isFocused(setting[24]).isRemoteAcked(addResult, outer1_2)));
        const obj2 = isFocused(setting[29]);
        const result2 = isFocused(setting[30]).clearNotificationGuildMentions();
        const obj3 = isFocused(setting[30]);
      }
    }
  }, items12);
  const items13 = [isFocused, tmp19[1]];
  const effect1 = height.useEffect(() => {
    if (isFocused) {
      _undefined2(false);
    }
    const result = isFocused(setting[29]).setNotificationCenterTabFocused(isFocused);
    return () => isFocused(setting[29]).setNotificationCenterTabFocused(false);
  }, items13);
  const items14 = [memo, tmp19[1]];
  const effect2 = height.useEffect(() => {
    if (memo) {
      _undefined2(true);
    }
  }, items14);
  obj = {};
  const obj9 = isFocused(setting[22]);
  obj.type = isFocused(setting[32]).ImpressionTypes.VIEW;
  obj.name = isFocused(setting[32]).ImpressionNames.NOTIFICATION_CENTER_LANDING;
  obj.properties = { empty: 0 === memo2.length };
  obj1 = { disableTrack: !initialized };
  const items15 = [initialized];
  currentNavigationRouteName(setting[31])(obj, obj1, items15);
  if (initialized) {
    obj2 = { items: memo2, loadingMore, loadMore, nestedInLaunchPad: merged.nestedInLaunchPad, shouldScrollToTop: tmp19[0], isSoftAcked: callback, onSoftAckItem: callback1, forceHoistItem: callback2, isForceHoisted: callback3, suggestedFriendAdded: callback4, onAddSuggestionAnimationFinish: callback5, panelVariant: flag };
    let tmp42Result = tmp42(isFocused(setting[34]).ForYouItems, obj2);
  } else {
    obj3 = {};
    const _Array = Array;
    const _Array2 = Array;
    obj3.children = Array.from(Array(10)).map((arg0, arg1) => stateFromStores3(isFocused(setting[33]).ForYouMentionPlaceholder, {}, arg1));
    tmp42Result = tmp42(c5, obj3);
    const arr = Array.from(Array(10));
  }
  return tmp42Result;
};
