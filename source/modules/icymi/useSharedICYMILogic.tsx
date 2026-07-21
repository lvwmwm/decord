// Module ID: 15089
// Function ID: 113730
// Name: useSharedICYMILogic
// Dependencies: []
// Exports: useSharedICYMILogic

// Module 15089 (useSharedICYMILogic)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const SCROLL_EVENT_THROTTLE_MS = arg1(dependencyMap[3]).SCROLL_EVENT_THROTTLE_MS;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = function useSharedICYMILogic(notificationItem) {
  let arr6;
  notificationItem = notificationItem.notificationItem;
  const arg1 = notificationItem;
  const tmp = callback(React.useState(false), 2);
  const importDefault = tmp2;
  const tmp3 = importDefault(dependencyMap[4])();
  const unreadItems = tmp3.unreadItems;
  const dependencyMap = unreadItems;
  const readItems = tmp3.readItems;
  let callback = readItems;
  const allUnreadItemsHydrated = tmp3.allUnreadItemsHydrated;
  const React = allUnreadItemsHydrated;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  closure_5 = stateFromStores;
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = stateFromStores.isFirstPageHydrated();
    if (isFirstPageHydratedResult) {
      isFirstPageHydratedResult = stateFromStores > 0;
    }
    return !isFirstPageHydratedResult;
  });
  const SCROLL_EVENT_THROTTLE_MS = stateFromStores1;
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const obj = { homeSessionId: "gravity" };
      ICYMIAnalytics.trackFeedShown(obj);
    }
  }, items2);
  const obj2 = arg1(dependencyMap[5]);
  const items3 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[5]).useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  const obj3 = arg1(dependencyMap[5]);
  const items4 = [closure_5];
  const stateFromStores3 = arg1(dependencyMap[5]).useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  const obj4 = arg1(dependencyMap[5]);
  [arr6, closure_9] = callback(React.useState([]), 2);
  const tmp9 = callback(React.useState([]), 2);
  const items5 = [closure_5];
  const stateFromStoresObject = arg1(dependencyMap[5]).useStateFromStoresObject(items5, () => ({ loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() }));
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  const found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  const arr = mapped.pop();
  const tmp12 = importDefault(dependencyMap[8])(arr);
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp12, arr, stateFromStoresObject.loadId, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != tmp12) {
          if (null != arr) {
            if (arr !== tmp12) {
              const _Date = Date;
              const timestamp = Date.now();
              if (timestamp - lastScrollEventTimestamp > stateFromStores1) {
                tmp2(unreadItems[9]).gravityScrollEvent(timestamp);
                const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
                const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
                const obj = tmp2(unreadItems[9]);
              }
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [stateFromStores, tmp[1]];
  callback = React.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      const tmp2 = tmp2(true);
    }
    if (0 !== viewableItems.length) {
      callback(viewableItems);
      const items = [];
      const viewableFeedItemsArray = notificationItem(unreadItems[10]).getViewableFeedItemsArray(viewableItems);
      const _Date = Date;
      let timestamp = Date.now();
      let diff = viewableFeedItemsArray.length - 1;
      if (diff >= 0) {
        do {
          let tmp3 = viewableFeedItemsArray[diff];
          let sum = timestamp;
          if (null != tmp3) {
            let obj = { id: tmp3.id };
            let tmp5 = closure_0;
            let tmp6 = closure_2;
            let obj2 = closure_0(closure_2[11]);
            obj.type = obj2.typeToString(tmp3);
            let tmp7 = +timestamp;
            sum = tmp7 + 1;
            obj.timestamp = tmp7;
            let arr = items.push(obj);
          }
          diff = diff - 1;
          timestamp = sum;
        } while (diff >= 0);
      }
      if (items.length > 0) {
        tmp2(unreadItems[9]).ackGravityItems(items, true);
        const obj3 = tmp2(unreadItems[9]);
      }
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: callback(closure_2[11]).typeToString(id) };
        return obj;
      }), stateFromStores);
      const obj4 = notificationItem(unreadItems[10]);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = React.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      const viewableFeedItemsArray = notificationItem(unreadItems[10]).getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: callback(closure_2[11]).typeToString(id) };
        return obj;
      }), stateFromStores);
      const obj = notificationItem(unreadItems[10]);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = callback(closure_2[7]).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = unreadItems(unreadItems[9]).triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: callback(closure_2[10]).itemToType(item), triggerType: "list", itemFeedIndex: item.index };
        const score = item.score;
        let tmp = null;
        if (null != score) {
          tmp = score;
        }
        obj.itemScore = tmp;
        const channelType = item.channelType;
        let tmp2 = null;
        if (null != channelType) {
          tmp2 = channelType;
        }
        obj.itemChannelType = tmp2;
        obj.isInitiallyVisible = false;
        return obj;
      }));
      const obj2 = unreadItems(unreadItems[9]);
    }
  }, items8);
  const callback2 = React.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const found = viewableItems.filter((item) => {
      const NON_ELIGIBLE_SCROLL_ITEMS = callback(closure_2[7]).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    tmp2(unreadItems[9]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: callback(closure_2[10]).itemToType(item), triggerType: "list", itemFeedIndex: item.index };
      const score = item.score;
      let tmp = null;
      if (null != score) {
        tmp = score;
      }
      obj.itemScore = tmp;
      const channelType = item.channelType;
      let tmp2 = null;
      if (null != channelType) {
        tmp2 = channelType;
      }
      obj.itemChannelType = tmp2;
      obj.isInitiallyVisible = false;
      return obj;
    }));
  }, []);
  const items9 = [callback, callback1, callback2];
  const memo = React.useMemo(() => {
    let obj = { viewabilityConfig: { 1694760785: null, 1420449339: "slide_from_bottom", -1396944286: "gr" }, onViewableItemsChanged: callback };
    const items = [obj, , ];
    obj = { viewabilityConfig: { 1694760785: false, 1420449339: false, -1396944286: false }, onViewableItemsChanged: callback1 };
    items[1] = obj;
    obj = { viewabilityConfig: {}, onViewableItemsChanged: callback2 };
    items[2] = obj;
    return items;
  }, items9);
  const effect2 = React.useEffect(() => {
    tmp2(unreadItems[9]).openICYMITab();
  }, []);
  const obj5 = arg1(dependencyMap[5]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  const obj6 = arg1(dependencyMap[12]);
  const memo1 = React.useMemo(() => {
    const data = [];
    const notificationItem = data;
    let tmp = stateFromStores1;
    if (stateFromStores1) {
      tmp = null != notificationItem;
    }
    if (tmp) {
      tmp = notificationItem.type === notificationItem(unreadItems[11]).ICYMIItemTypes.CUSTOM_STATUS;
    }
    if (tmp) {
      let obj = { id: notificationItem.id };
      const _Date = Date;
      obj.timestamp = Date.now();
      obj = { kind: "contentInventory" };
      let obj2 = notificationItem(unreadItems[10]);
      obj.content = obj2.customStatusToContentInventoryEntry(notificationItem).activity;
      obj.data = obj;
      obj.score = notificationItem.score;
      obj.unread = true;
      data.push(obj);
    }
    if (stateFromStores1) {
      obj = {};
      const obj1 = { kind: "loading" };
      obj.data = obj1;
      data.push(obj);
    } else {
      const item = unreadItems.forEach((data) => {
        if (!obj.isItemNSFW(data)) {
          data.push(data);
        }
      });
      if (allUnreadItemsHydrated) {
        obj2 = {};
        const obj3 = { kind: "end" };
        obj2.data = obj3;
        data.push(obj2);
      }
      if (readItems.length > 0) {
        const item1 = readItems.forEach((data) => {
          if (!obj.isItemNSFW(data)) {
            data.push(data);
          }
        });
      }
      if (stateFromStores3) {
        const obj4 = {};
        const obj5 = { kind: "bottomLoading" };
        obj4.data = obj5;
        data.push(obj4);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  obj = { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: arg1(dependencyMap[12]).useICYMIReloadHandler(notificationItem.showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
  return obj;
};
