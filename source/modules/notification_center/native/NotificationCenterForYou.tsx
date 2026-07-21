// Module ID: 15015
// Function ID: 113049
// Name: isHoisted
// Dependencies: []
// Exports: NotificationCenterForYou

// Module 15015 (isHoisted)
let RootNavigatorScreen;
let YouBarNavigatorScreens;
function isHoisted(type) {
  return type.type === arg1(dependencyMap[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
({ RootNavigatorScreen, YouBarNavigatorScreens } = arg1(dependencyMap[9]));
const ReadStateTypes = arg1(dependencyMap[10]).ReadStateTypes;
const jsx = arg1(dependencyMap[11]).jsx;
const items = [, , , , ];
({ YOU: arr[0], SETTINGS: arr[1] } = RootNavigatorScreen);
({ GUILDS: arr[2], ICYMI: arr[3], NOTIFICATIONS: arr[4] } = YouBarNavigatorScreens);
const set = new Set(items);
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/notification_center/native/NotificationCenterForYou.tsx");

export const NotificationCenterForYou = (panelVariant) => {
  let loadMore;
  let loadingMore;
  let flag = panelVariant.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.panelVariant = 0;
  let arg1;
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let AnalyticEvents;
  let YouBarNavigatorScreens;
  let ReadStateTypes;
  let jsx;
  let set;
  let isHoisted;
  let tmp20;
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
  obj = arg1(dependencyMap[13]);
  const isFocused = obj.useIsFocused();
  arg1 = isFocused;
  let obj1 = arg1(dependencyMap[14]);
  const currentNavigationRouteName = obj1.useCurrentNavigationRouteName();
  importDefault = currentNavigationRouteName;
  const NotificationCenterAckedBeforeId = arg1(dependencyMap[15]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  dependencyMap = setting;
  let items = [currentNavigationRouteName, isFocused];
  const memo = React.useMemo(() => {
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
  callback = memo;
  const height = importDefault(dependencyMap[16])().height;
  React = height;
  const ChannelListLayoutSetting = arg1(dependencyMap[15]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === arg1(dependencyMap[17]).ChannelListLayoutTypes.COMPACT;
  View = tmp8;
  const items1 = [tmp8, height];
  const memo1 = React.useMemo(() => {
    let num = 68;
    if (tmp8) {
      num = 48;
    }
    return Math.min(50, Math.max(8, Math.ceil(height / num)));
  }, items1);
  let obj2 = arg1(dependencyMap[18]);
  const notificationCenterItemsLoader = obj2.useNotificationCenterItemsLoader({ isFocused, navigatedAway: memo, withMentions: true, initialPageSize: memo1 });
  const initialized = notificationCenterItemsLoader.initialized;
  closure_6 = initialized;
  const hasMore = notificationCenterItemsLoader.hasMore;
  closure_7 = hasMore;
  items = notificationCenterItemsLoader.items;
  closure_8 = items;
  const setReadNotifItemToAcked = notificationCenterItemsLoader.setReadNotifItemToAcked;
  closure_9 = setReadNotifItemToAcked;
  const errored = notificationCenterItemsLoader.errored;
  closure_10 = errored;
  ({ loadMore, loadingMore } = notificationCenterItemsLoader);
  let obj3 = arg1(dependencyMap[19]);
  const items2 = [closure_10];
  const stateFromStores = obj3.useStateFromStores(items2, () => errored.hasNewMentions());
  AnalyticEvents = stateFromStores;
  const items3 = [closure_9];
  const stateFromStores1 = arg1(dependencyMap[19]).useStateFromStores(items3, () => setReadNotifItemToAcked.localItems, []);
  YouBarNavigatorScreens = stateFromStores1;
  const obj5 = arg1(dependencyMap[19]);
  const getOrFetchNotificationCenterItemsApplications = arg1(dependencyMap[20]).useGetOrFetchNotificationCenterItemsApplications(stateFromStores1);
  const obj6 = arg1(dependencyMap[20]);
  const items4 = [closure_8, closure_7];
  const stateFromStores2 = arg1(dependencyMap[19]).useStateFromStores(items4, () => {
    const currentUser = items.getCurrentUser();
    let ackMessageIdResult = null;
    if (null != currentUser) {
      ackMessageIdResult = hasMore.ackMessageId(currentUser.id, stateFromStores2.NOTIFICATION_CENTER);
    }
    return ackMessageIdResult;
  });
  ReadStateTypes = stateFromStores2;
  const obj7 = arg1(dependencyMap[19]);
  const items5 = [closure_6];
  const stateFromStores3 = arg1(dependencyMap[19]).useStateFromStores(items5, () => initialized.getTotalNotificationsMentionCount(true));
  jsx = stateFromStores3;
  const tmp16 = callback(React.useState(stateFromStores2), 2);
  const first = tmp16[0];
  set = first;
  isHoisted = tmp18;
  const tmp19 = callback(React.useState(false), 2);
  tmp20 = tmp19[1];
  const obj8 = arg1(dependencyMap[19]);
  first1 = callback(React.useState(Date.now()), 2)[0];
  set = new Set();
  const tmp24 = callback(React.useState(set), 2);
  first2 = tmp24[0];
  closure_20 = tmp24[1];
  const items6 = [first2];
  const items7 = [first2];
  callback = React.useCallback((arg0) => first2.has(arg0), items6);
  const callback1 = React.useCallback((forceUnacked) => {
    if (!forceUnacked.forceUnacked) {
      if (!first2.has(forceUnacked.id)) {
        const _Set = Set;
        const set = new Set(first2);
        set.add(forceUnacked.id);
        callback(set);
      }
    }
  }, items7);
  const tmp21 = callback(React.useState(Date.now()), 2);
  closure_21 = React.useRef(new Set());
  const set1 = new Set();
  closure_22 = React.useRef(new Set());
  const callback2 = React.useCallback((id) => {
    const current = ref.current;
    current.add(id.id);
  }, []);
  callback3 = React.useCallback((id) => {
    const current = ref.current;
    return current.has(id.id);
  }, []);
  const tmp32 = importDefault(dependencyMap[21])();
  setAdded = tmp32.setAdded;
  friendSuggestions = tmp32.friendSuggestions;
  const items8 = [setAdded];
  const items9 = [setAdded];
  const callback4 = React.useCallback((arg0) => {
    const isFocused = arg0;
    setAdded((arg0) => {
      const items = [...arg0, arg0];
      return items;
    });
  }, items8);
  const callback5 = React.useCallback((arg0) => {
    const isFocused = arg0;
    setAdded((arr) => arr.filter((user) => user.user.id !== user.user.id));
  }, items9);
  const set2 = new Set();
  shouldAgeVerifyForAgeGate = arg1(dependencyMap[22]).useShouldAgeVerifyForAgeGate();
  const items10 = [items, hasMore, stateFromStores1, friendSuggestions, initialized, stateFromStores, errored, setting, first, setReadNotifItemToAcked, callback3, stateFromStores3, shouldAgeVerifyForAgeGate];
  memo2 = React.useMemo(() => {
    function sortBySnowflake(items1) {
      const sorted = items1.sort((id, id2) => -1 * callback(closure_2[23]).compare(id.id, id2.id));
    }
    let id;
    if (items.length > 0) {
      id = items[closure_8.length - 1].id;
    }
    const isFocused = id;
    if (hasMore) {
      if (null != id) {
        let found = stateFromStores1.filter((forceUnacked) => {
          forceUnacked = forceUnacked.forceUnacked;
          if (!forceUnacked) {
            forceUnacked = arr6(items2[23]).compare(forceUnacked.id, id) > 0;
            const obj = arr6(items2[23]);
          }
          return forceUnacked;
        });
      }
      const items = [];
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(items, 0));
      let found1 = items;
      if (shouldAgeVerifyForAgeGate) {
        found1 = items.filter((kind) => {
          let tmp = "notification-center-item" !== kind.kind;
          if (!tmp) {
            tmp = !id(items2[22]).shouldShowAgeGateForChannelId(kind.message_channel_id);
            const obj = id(items2[22]);
          }
          return tmp;
        });
      }
      let items1 = [];
      let currentNavigationRouteName = items1;
      const items2 = [];
      const setting = items2;
      const items3 = [];
      const memo = items3;
      const item = found1.forEach((kind) => {
        let addResult = kind;
        if ("notification-center-item" === kind.kind) {
          if (null != addResult.local_id) {
            let tmp22 = !addResult.acked;
            if (tmp22) {
              tmp22 = !localItemAcked.isLocalItemAcked(addResult);
            }
            let flag = tmp22;
          } else {
            if (obj4.isMentionItem(addResult)) {
              if (!addResult.acked) {
                if (null != addResult.message_channel_id) {
                  const current = ref.current;
                  if (!current.has(addResult.id)) {
                    const ackMessageIdResult = closure_7.ackMessageId(addResult.message_channel_id);
                    if (obj.compare(addResult.message_id, ackMessageIdResult) <= 0) {
                      callback(addResult);
                      flag = false;
                    }
                    const obj = arr6(items2[23]);
                  }
                }
                if (null != closure_15) {
                  flag = arr6(items2[23]).compare(addResult.id, closure_15) > 0;
                  const obj2 = arr6(items2[23]);
                }
              }
            }
            const obj4 = id(items2[24]);
            const isRemoteAckedResult = id(items2[24]).isRemoteAcked(addResult, items2);
            if ("go_live_push" === addResult.type) {
              if (null != addResult.deeplink) {
                let tmp17 = arr6(items2[25])(addResult.deeplink).payload.type === id(items2[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
                const tmp21 = arr6(items2[25])(addResult.deeplink).payload.type === id(items2[26]).LinkingTypes.VOICE_CHANNEL && !isRemoteAckedResult;
              }
              flag = tmp17;
            }
            tmp17 = !isRemoteAckedResult;
            const obj3 = id(items2[24]);
          }
          if (!flag) {
            callback(addResult);
          }
          const current2 = ref2.current;
          if (current2.has(addResult.id)) {
            arr6.push(addResult);
            addResult.acked = false;
            const current3 = ref.current;
            addResult = current3.add(addResult.id);
          } else if (!callback2(addResult)) {
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
      const tmp19 = memo(obj.partition(items1, (type) => type.type === id(items2[12]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && type.acked), 2);
      const first = tmp19[0];
      let arr6 = tmp19[1];
      if (first.length > 3) {
        obj = { type: isFocused(setting[12]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED, id: first[0].id, other_user: first[0].other_user, other_users: first.map((other_user) => other_user.other_user), forceUnacked: true };
        arr6.push(obj);
        currentNavigationRouteName = arr6;
        items1 = arr6;
      }
      const item1 = items1.forEach((arg0) => {
        const tmp = !callback3(arg0);
        arg0.enableBadge = tmp;
        return tmp;
      });
      const items4 = [];
      const height = items4;
      if (friendSuggestions.length > 0) {
        obj = { <string:3060159136>: 2018574338, <string:3856097814>: -918482477, showDivider: items1.length > 0 };
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
          const obj1 = { <string:3060159136>: "<string:410124289>", <string:3856097814>: "<string:402653184>", suggestedFriends: friendSuggestions };
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
        items5.push({ <string:3060159136>: true, <string:3856097814>: true });
      }
      const obj3 = {};
      if (items1.length > 0) {
        items1.unshift({ <string:3060159136>: "/assets/modules/notification_center/native/images", <string:3856097814>: 24 });
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
        const tmp74 = spliceResult.length > 0 || items5.length > 0;
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
        const tmp45 = 0 === items4.length && items5.length > 0;
      }
      return items6;
    }
    found = stateFromStores1;
  }, items10);
  const items11 = [initialized, first1];
  const layoutEffect = React.useLayoutEffect(() => {
    if (initialized) {
      let obj = currentNavigationRouteName(setting[28]);
      obj = { version: "v2", load_start_timestamp: first1 };
      const _Date = Date;
      obj.tti_millis = Date.now() - first1;
      obj.track(stateFromStores.NOTIFICATION_CENTER_LOADED, obj);
    }
  }, items11);
  const items12 = [memo, stateFromStores2, first, memo2, setting, tmp16[1], callback3];
  const effect = React.useEffect(() => {
    if (memo) {
      const found = memo2.filter((kind) => "notification-center-item" === kind.kind);
      const current = ref.current;
      current.clear();
      const item = found.forEach((arg0) => {
        if (!callback2(arg0)) {
          arg0.enableBadge = false;
        }
      });
      if (stateFromStores2 !== first) {
        tmp18(stateFromStores2);
        const found1 = found.filter((local_id) => {
          let tmp = null != local_id.local_id;
          if (tmp) {
            tmp = !localItemAcked.isLocalItemAcked(local_id);
          }
          return tmp;
        });
        const mapped = found1.map((local_id) => local_id.local_id);
        const result = isFocused(setting[29]).markNotificationCenterLocalItemsAcked(mapped);
        const obj = isFocused(setting[29]);
        const result1 = isFocused(setting[29]).bulkMarkNotificationCenterItemsAcked(found.filter((addResult) => !callback(closure_2[24]).isRemoteAcked(addResult, closure_2)));
        const obj2 = isFocused(setting[29]);
        const result2 = isFocused(setting[30]).clearNotificationGuildMentions();
        const obj3 = isFocused(setting[30]);
      }
    }
  }, items12);
  const items13 = [isFocused, tmp20];
  const effect1 = React.useEffect(() => {
    if (isFocused) {
      tmp20(false);
    }
    const result = isFocused(setting[29]).setNotificationCenterTabFocused(isFocused);
    return () => callback(closure_2[29]).setNotificationCenterTabFocused(false);
  }, items13);
  const items14 = [memo, tmp20];
  const effect2 = React.useEffect(() => {
    if (memo) {
      tmp20(true);
    }
  }, items14);
  obj = {};
  const obj9 = arg1(dependencyMap[22]);
  obj.type = arg1(dependencyMap[32]).ImpressionTypes.VIEW;
  obj.name = arg1(dependencyMap[32]).ImpressionNames.NOTIFICATION_CENTER_LANDING;
  obj.properties = { empty: 0 === memo2.length };
  obj1 = { disableTrack: !initialized };
  const items15 = [initialized];
  importDefault(dependencyMap[31])(obj, obj1, items15);
  if (initialized) {
    obj2 = { items: memo2, loadingMore, loadMore, nestedInLaunchPad: merged.nestedInLaunchPad, shouldScrollToTop: tmp19[0], isSoftAcked: callback, onSoftAckItem: callback1, forceHoistItem: callback2, isForceHoisted: callback3, suggestedFriendAdded: callback4, onAddSuggestionAnimationFinish: callback5, panelVariant: flag };
    let tmp42Result = tmp42(arg1(dependencyMap[34]).ForYouItems, obj2);
  } else {
    obj3 = {};
    const _Array = Array;
    const _Array2 = Array;
    obj3.children = Array.from(Array(10)).map((arg0, arg1) => stateFromStores3(isFocused(setting[33]).ForYouMentionPlaceholder, {}, arg1));
    tmp42Result = tmp42(View, obj3);
    const arr = Array.from(Array(10));
  }
  return tmp42Result;
};
