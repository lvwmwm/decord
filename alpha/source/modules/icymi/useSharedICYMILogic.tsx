// Module ID: 19130
// Function ID: 19131
// Name: useSharedICYMILogic
// Dependencies: [32, 19, 10137, 19096, 10159, 10142, 19131, 504, 16733, 19129, 8369, 10150, 19128, 10149, 19132, 2]
// Exports: useSharedICYMILogic

// Module 19130 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 10142 */;
import ICYMIUtils from "ICYMIUtils" /* 10149 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10150 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 16733 */;
import ICYMIConstants from "ICYMIConstants" /* 19096 */;
import ICYMIStoreUtils from "ICYMIStoreUtils" /* 19128 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 10137 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, viewableItems;

const SCROLL_EVENT_THROTTLE_MS = ICYMIConstants.SCROLL_EVENT_THROTTLE_MS;
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export function useSharedICYMILogic(notificationItem) {
  let _undefined;
  let arr6;
  let c11;
  let closure_1;
  let isWaterwheelsCardEligible;
  let showDot;
  const f118185 = (item) => {
    let items;
    let tmpResult;
    const obj = notificationItem(unreadItems[4]);
    const dehydratedAnalyticsItemId = obj.getDehydratedAnalyticsItemId(item);
    const tmp = notificationItem;
    const tmp2 = unreadItems;
    if (null == dehydratedAnalyticsItemId) {
      items = [];
    } else {
      const obj2 = { id: dehydratedAnalyticsItemId, type: tmpResult.typeToString(item) };
      items = [obj2];
      tmpResult = tmp(tmp2[5]);
    }
    return items;
  };
  notificationItem = notificationItem.notificationItem;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  c11 = undefined;
  ({ showDot, isWaterwheelsCardEligible } = notificationItem);
  let tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  let tmp3 = tmp[1];
  importDefault = tmp3;
  const first = tmp[0];
  let tmp4 = require("useICYMIItems")({ isWaterwheelsCardEligible });
  unreadItems = tmp4.unreadItems;
  readItems = tmp4.readItems;
  allUnreadItemsHydrated = tmp4.allUnreadItemsHydrated;
  const allItemsHydrated = tmp4.allItemsHydrated;
  const discoverEnabled = tmp4.discoverEnabled;
  let obj = notificationItem(unreadItems[7]);
  let items = [allItemsHydrated];
  const stateFromStores = obj.useStateFromStores(items, () => allItemsHydrated.getVersion(), []);
  let obj2 = notificationItem(unreadItems[7]);
  const items1 = [allItemsHydrated];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != allItemsHydrated.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[8]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj3 = notificationItem(unreadItems[7]);
  const items3 = [allItemsHydrated];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => allItemsHydrated.isRefreshing(), []);
  let obj4 = notificationItem(unreadItems[7]);
  const items4 = [allItemsHydrated];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => allItemsHydrated.isHydrating(), []);
  [arr6, c11] = readItems(allUnreadItemsHydrated.useState([]), 2);
  const tmp10 = readItems(allUnreadItemsHydrated.useState([]), 2);
  let obj5 = notificationItem(unreadItems[7]);
  const items5 = [allItemsHydrated];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items5, () => {
    const obj = { loadId: allItemsHydrated.getLoadId(), lastScrollEventTimestamp: allItemsHydrated.lastScrollEvent() };
    return obj;
  });
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  const loadId = stateFromStoresObject.loadId;
  let found = arr6.filter((item) => {
    item = item.item;
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp13 = require("react")(arr);
  let closure_14 = tmp13;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp13, arr, loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    const tmp = stateFromStores2;
    if (!tmp) {
      const tmp2 = stateFromStores1;
      if (!tmp2) {
        if (null != closure_14) {
          if (null != arr) {
            if (arr !== tmp3) {
              const _Date = Date;
              const timestamp = Date.now();
              if (timestamp - lastScrollEventTimestamp > SCROLL_EVENT_THROTTLE_MS) {
                const obj = ICYMIActionCreatorsDefault;
                obj.gravityScrollEvent(timestamp);
                const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
                const result = ICYMIAnalytics.trackFeedFirstScrollStarted();
              }
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [stateFromStores, tmp3];
  const onViewableItemsChanged = allUnreadItemsHydrated.useCallback((viewableItems) => {
    let obj2;
    let tmp9;
    viewableItems = viewableItems.viewableItems;
    if (viewableItems.some((item) => "end" === item.item.data.kind)) {
      closure_1(true);
    }
    if (0 !== viewableItems.length) {
      _undefined(viewableItems);
      const items = [];
      const obj4 = ICYMIStoreUtils;
      const viewableFeedItemsArray = obj4.getViewableFeedItemsArray(viewableItems);
      const _Date = Date;
      let timestamp = Date.now();
      let diff = viewableFeedItemsArray.length - 1;
      if (0 <= diff) {
        do {
          let tmp3 = viewableFeedItemsArray[diff];
          let sum = timestamp;
          if (null != tmp3) {
            let obj = { id: tmp3.id, type: obj2.typeToString(tmp3), timestamp: tmp9 };
            let push = items.push;
            obj2 = ICYMITypes;
            tmp9 = +timestamp;
            sum = tmp9 + 1;
            arr = push(obj);
          }
          diff = diff - 1;
          timestamp = sum;
        } while (0 <= diff);
      }
      if (items.length > 0) {
        const obj3 = ICYMIActionCreatorsDefault;
        obj3.ackGravityItems(items, true);
      }
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.flatMap(f118185), stateFromStores);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      let tmp = require;
      let tmp2 = dependencyMap;
      let obj = ICYMIStoreUtils;
      const viewableFeedItemsArray = obj.getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.flatMap(f118185), stateFromStores);
      const triggerItemsLongImpression = ICYMIActionCreatorsDefault.triggerItemsLongImpression;
      ICYMIActionCreatorsDefault;
      const found = viewableItems.filter((item) => {
        item = item.item;
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
      });
      const result1 = triggerItemsLongImpression(found.map((item) => {
        let channelType;
        let index;
        let obj2;
        let obj3;
        let score;
        ({ item, index } = item);
        const obj = { itemId: obj2.getListAnalyticsItemId(item), itemType: obj3.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
        obj2 = notificationItem(unreadItems[4]);
        obj3 = notificationItem(unreadItems[13]);
        if ("waterwheelsItem" === item.data.kind) {
          index = item.data.brokerPosition;
        }
        score = item.score;
        if (score == null) {
          score = null;
        }
        channelType = item.channelType;
        if (channelType == null) {
          channelType = null;
        }
        return obj;
      }));
    }
  }, items8);
  const callback2 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    const startItemsDwell = closure_1(unreadItems[11]).startItemsDwell;
    closure_1(unreadItems[11]);
    const found = viewableItems.filter((item) => {
      item = item.item;
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[9]).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
    });
    startItemsDwell(found.map((item) => {
      let channelType;
      let index;
      let obj2;
      let obj3;
      let score;
      ({ item, index } = item);
      const obj = { itemId: obj2.getListAnalyticsItemId(item), itemType: obj3.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
      obj2 = notificationItem(unreadItems[4]);
      obj3 = notificationItem(unreadItems[13]);
      if ("waterwheelsItem" === item.data.kind) {
        index = item.data.brokerPosition;
      }
      score = item.score;
      if (score == null) {
        score = null;
      }
      channelType = item.channelType;
      if (channelType == null) {
        channelType = null;
      }
      return obj;
    }));
  }, []);
  const items9 = [onViewableItemsChanged, callback1, callback2];
  const memo = allUnreadItemsHydrated.useMemo(() => {
    const items = [, , ];
    const obj = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 }, onViewableItemsChanged };
    items[0] = obj;
    const obj2 = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 1000 }, onViewableItemsChanged: callback1 };
    items[1] = obj2;
    const obj3 = { viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 }, onViewableItemsChanged: callback2 };
    items[2] = obj3;
    return items;
  }, items9);
  const effect2 = allUnreadItemsHydrated.useEffect(() => {
    const obj = closure_1(unreadItems[11]);
    obj.openICYMITab();
  }, []);
  let obj6 = notificationItem(unreadItems[14]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, allItemsHydrated, discoverEnabled, readItems, stateFromStores3];
  const iCYMIReloadHandler = obj6.useICYMIReloadHandler(showDot);
  const memo1 = allUnreadItemsHydrated.useMemo(() => {
    let obj2;
    let obj3;
    const data = [];
    let tmp2 = stateFromStores1;
    if (stateFromStores1) {
      tmp2 = null != notificationItem;
    }
    if (tmp2) {
      tmp2 = notificationItem.type === ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS;
    }
    if (tmp2) {
      let obj = { id: notificationItem.id, timestamp: Date.now(), data: obj2, score: notificationItem.score, unread: true };
      const _Date = Date;
      const push = data.push;
      obj2 = { kind: "contentInventory", content: obj3.customStatusToContentInventoryEntry(notificationItem).activity };
      obj3 = ICYMIUtils;
      push(obj);
    }
    if (stateFromStores1) {
      const obj4 = { id: "loading", timestamp: 0, unread: false, data: { kind: "loading" } };
      data.push(obj4);
    } else {
      const item = unreadItems.forEach((item) => {
        const obj = notificationItem(unreadItems[13]);
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
      });
      let tmp15 = discoverEnabled;
      const tmp16 = !discoverEnabled && allUnreadItemsHydrated;
      if (tmp16) {
        const obj5 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj5);
      }
      const item1 = readItems.forEach((item) => {
        const obj = notificationItem(unreadItems[13]);
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
      });
      if (tmp15) {
        tmp15 = allItemsHydrated;
      }
      if (tmp15) {
        const obj6 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj6);
      }
      const tmp21 = stateFromStores3;
      if (tmp21) {
        const obj7 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj7);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  let obj7 = { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: first, isRefreshing: stateFromStores2, handleOnRefresh: iCYMIReloadHandler, stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
  return obj7;
}
