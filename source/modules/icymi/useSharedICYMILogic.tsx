// Module ID: 15212
// Function ID: 115942
// Name: useSharedICYMILogic
// Dependencies: [57, 31, 8306, 15178, 15213, 566, 8330, 8327, 8466, 8321, 8320, 7087, 15214, 2]
// Exports: useSharedICYMILogic

// Module 15212 (useSharedICYMILogic)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SCROLL_EVENT_THROTTLE_MS } from "NUM_GUILDS_EXTENDED_ONBOARDING";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = function useSharedICYMILogic(notificationItem) {
  let arr6;
  let closure_9;
  notificationItem = notificationItem.notificationItem;
  let tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  const importDefault = tmp2;
  let tmp3 = importDefault(unreadItems[4])();
  unreadItems = tmp3.unreadItems;
  readItems = tmp3.readItems;
  allUnreadItemsHydrated = tmp3.allUnreadItemsHydrated;
  let obj = notificationItem(unreadItems[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  const items1 = [stateFromStores];
  const stateFromStores1 = notificationItem(unreadItems[5]).useStateFromStores(items1, () => {
    let isFirstPageHydratedResult = stateFromStores.isFirstPageHydrated();
    if (isFirstPageHydratedResult) {
      isFirstPageHydratedResult = stateFromStores > 0;
    }
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const obj = { homeSessionId: "gravity" };
      ICYMIAnalytics.trackFeedShown(obj);
    }
  }, items2);
  let obj2 = notificationItem(unreadItems[5]);
  const items3 = [stateFromStores];
  const stateFromStores2 = notificationItem(unreadItems[5]).useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj3 = notificationItem(unreadItems[5]);
  const items4 = [stateFromStores];
  const stateFromStores3 = notificationItem(unreadItems[5]).useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  let obj4 = notificationItem(unreadItems[5]);
  [arr6, closure_9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  const tmp9 = readItems(allUnreadItemsHydrated.useState([]), 2);
  const items5 = [stateFromStores];
  const stateFromStoresObject = notificationItem(unreadItems[5]).useStateFromStoresObject(items5, () => ({ loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() }));
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  let found = arr6.filter((item) => {
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp12 = importDefault(unreadItems[8])(arr);
  let closure_12 = tmp12;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp12, arr, stateFromStoresObject.loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    if (!stateFromStores2) {
      if (!stateFromStores1) {
        if (null != closure_12) {
          if (null != arr) {
            if (arr !== closure_12) {
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
  const callback = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      tmp2 = tmp2(true);
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
            let tmp5 = notificationItem;
            let tmp6 = unreadItems;
            let obj2 = notificationItem(unreadItems[11]);
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
        const obj = { id: id.id, type: notificationItem(unreadItems[11]).typeToString(id) };
        return obj;
      }), stateFromStores);
      const obj4 = notificationItem(unreadItems[10]);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      const viewableFeedItemsArray = notificationItem(unreadItems[10]).getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        const obj = { id: id.id, type: notificationItem(unreadItems[11]).typeToString(id) };
        return obj;
      }), stateFromStores);
      let obj = notificationItem(unreadItems[10]);
      const found = viewableItems.filter((item) => {
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
      });
      const result1 = unreadItems(unreadItems[9]).triggerItemsLongImpression(found.map((item) => {
        item = item.item;
        const obj = { itemId: item.id, itemType: notificationItem(unreadItems[10]).itemToType(item), triggerType: "list", itemFeedIndex: item.index };
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
  const callback2 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const found = viewableItems.filter((item) => {
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.item.data.kind);
    });
    tmp2(unreadItems[9]).startItemsDwell(found.map((item) => {
      item = item.item;
      const obj = { itemId: item.id, itemType: notificationItem(unreadItems[10]).itemToType(item), triggerType: "list", itemFeedIndex: item.index };
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
  const memo = allUnreadItemsHydrated.useMemo(() => {
    let obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged: callback };
    const items = [obj, , ];
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 };
    items[1] = obj;
    obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 };
    items[2] = obj;
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    tmp2(unreadItems[9]).openICYMITab();
  }, []);
  let obj5 = notificationItem(unreadItems[5]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
  const obj6 = notificationItem(unreadItems[12]);
  const memo1 = allUnreadItemsHydrated.useMemo(() => {
    const data = [];
    let tmp = stateFromStores1;
    if (stateFromStores1) {
      tmp = null != data;
    }
    if (tmp) {
      tmp = data.type === notificationItem(unreadItems[11]).ICYMIItemTypes.CUSTOM_STATUS;
    }
    if (tmp) {
      let obj = { id: data.id };
      const _Date = Date;
      obj.timestamp = Date.now();
      obj = { kind: "contentInventory" };
      let obj2 = notificationItem(unreadItems[10]);
      obj.content = obj2.customStatusToContentInventoryEntry(data).activity;
      obj.data = obj;
      obj.score = data.score;
      obj.unread = true;
      data.push(obj);
    }
    if (stateFromStores1) {
      obj = { id: "loading", timestamp: 0, unread: false };
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
        obj2 = { id: "end", timestamp: 0, unread: false };
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
        const obj4 = { id: "bottomLoading", timestamp: 0, unread: false };
        const obj5 = { kind: "bottomLoading" };
        obj4.data = obj5;
        data.push(obj4);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  obj = { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: tmp[0], isRefreshing: stateFromStores2, handleOnRefresh: notificationItem(unreadItems[12]).useICYMIReloadHandler(notificationItem.showDot), stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
  return obj;
};
