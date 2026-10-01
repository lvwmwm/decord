// Module ID: 16124
// Function ID: 16125
// Name: useSharedICYMILogic
// Dependencies: [32, 19, 7783, 16090, 16125, 504, 7807, 7805, 9089, 7799, 7798, 7796, 16126, 2]
// Exports: useSharedICYMILogic

// Module 16124 (useSharedICYMILogic)
import ICYMITypes from "ICYMITypes" /* 7796 */;
import ICYMIUtils from "ICYMIUtils" /* 7798 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 7807 */;
import ICYMIConstants from "ICYMIConstants" /* 16090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_12, importDefault;

const SCROLL_EVENT_THROTTLE_MS = ICYMIConstants.SCROLL_EVENT_THROTTLE_MS;
let result = size.fileFinishedImporting("modules/icymi/useSharedICYMILogic.tsx");

export const useSharedICYMILogic = function useSharedICYMILogic(notificationItem) {
  let _undefined;
  let arr6;
  let c9;
  let closure_1;
  notificationItem = notificationItem.notificationItem;
  let unreadItems;
  let readItems;
  let allUnreadItemsHydrated;
  let stateFromStores;
  c9 = undefined;
  const showDot = notificationItem.showDot;
  let tmp = readItems(allUnreadItemsHydrated.useState(false), 2);
  let tmp3 = tmp[1];
  importDefault = tmp3;
  const first = tmp[0];
  let tmp4 = require("useICYMIItems")();
  unreadItems = tmp4.unreadItems;
  readItems = tmp4.readItems;
  allUnreadItemsHydrated = tmp4.allUnreadItemsHydrated;
  let obj = notificationItem(unreadItems[5]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getVersion(), []);
  let obj2 = notificationItem(unreadItems[5]);
  const items1 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const isFirstPageHydratedResult = ICYMIStore.isFirstPageHydrated() && stateFromStores > 0;
    return !isFirstPageHydratedResult;
  });
  const items2 = [stateFromStores];
  const effect = allUnreadItemsHydrated.useEffect(() => {
    if (null != stateFromStores.getLoadId()) {
      const ICYMIAnalytics = notificationItem(unreadItems[6]).ICYMIAnalytics;
      ICYMIAnalytics.trackFeedShown({ homeSessionId: "gravity" });
    }
  }, items2);
  let obj3 = notificationItem(unreadItems[5]);
  const items3 = [stateFromStores];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => stateFromStores.isRefreshing(), []);
  let obj4 = notificationItem(unreadItems[5]);
  const items4 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => stateFromStores.isHydrating(), []);
  [arr6, c9] = readItems(allUnreadItemsHydrated.useState([]), 2);
  const tmp10 = readItems(allUnreadItemsHydrated.useState([]), 2);
  let obj5 = notificationItem(unreadItems[5]);
  const items5 = [stateFromStores];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items5, () => {
    const obj = { loadId: stateFromStores.getLoadId(), lastScrollEventTimestamp: stateFromStores.lastScrollEvent() };
    return obj;
  });
  const lastScrollEventTimestamp = stateFromStoresObject.lastScrollEventTimestamp;
  const loadId = stateFromStoresObject.loadId;
  let found = arr6.filter((item) => {
    item = item.item;
    const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
    return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
  });
  const mapped = found.map((item) => item.item.id);
  let arr = mapped.pop();
  const tmp13 = require("react")(arr);
  closure_12 = tmp13;
  const items6 = [stateFromStores2, lastScrollEventTimestamp, tmp13, arr, loadId, stateFromStores1];
  const effect1 = allUnreadItemsHydrated.useEffect(() => {
    const tmp = stateFromStores2;
    if (!tmp) {
      const tmp2 = stateFromStores1;
      if (!tmp2) {
        if (null != closure_12) {
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
      const obj4 = ICYMIUtils;
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
      const result = ICYMIAnalytics.trackItemShortImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        let obj2;
        const obj = { id: id.id, type: obj2.typeToString(id) };
        obj2 = notificationItem(unreadItems[11]);
        return obj;
      }), stateFromStores);
    }
  }, items7);
  const items8 = [stateFromStores];
  const callback1 = allUnreadItemsHydrated.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (0 !== viewableItems.length) {
      let obj = ICYMIUtils;
      const viewableFeedItemsArray = obj.getViewableFeedItemsArray(viewableItems);
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const result = ICYMIAnalytics.trackItemLongImpression(viewableItems, viewableFeedItemsArray.map((id) => {
        let obj2;
        const obj = { id: id.id, type: obj2.typeToString(id) };
        obj2 = notificationItem(unreadItems[11]);
        return obj;
      }), stateFromStores);
      const triggerItemsLongImpression = ICYMIActionCreatorsDefault.triggerItemsLongImpression;
      ICYMIActionCreatorsDefault;
      const found = viewableItems.filter((item) => {
        item = item.item;
        const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
        return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
      });
      const result1 = triggerItemsLongImpression(found.map((item) => {
        let channelType;
        let index;
        let obj2;
        let score;
        item = item.item;
        const obj = { itemId: item.id, itemType: obj2.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
        index = item.index;
        score = item.score;
        obj2 = notificationItem(unreadItems[10]);
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
    const startItemsDwell = closure_1(unreadItems[9]).startItemsDwell;
    closure_1(unreadItems[9]);
    const found = viewableItems.filter((item) => {
      item = item.item;
      const NON_ELIGIBLE_SCROLL_ITEMS = notificationItem(unreadItems[7]).NON_ELIGIBLE_SCROLL_ITEMS;
      return !NON_ELIGIBLE_SCROLL_ITEMS.has(item.data.kind);
    });
    startItemsDwell(found.map((item) => {
      let channelType;
      let index;
      let obj2;
      let score;
      item = item.item;
      const obj = { itemId: item.id, itemType: obj2.itemToType(item), triggerType: "list", itemFeedIndex: index, itemScore: score, itemChannelType: channelType, isInitiallyVisible: false };
      index = item.index;
      score = item.score;
      obj2 = notificationItem(unreadItems[10]);
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
    const obj = closure_1(unreadItems[9]);
    obj.openICYMITab();
  }, []);
  let obj6 = notificationItem(unreadItems[12]);
  const items10 = [stateFromStores1, notificationItem, unreadItems, allUnreadItemsHydrated, readItems, stateFromStores3];
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
        const obj = notificationItem(unreadItems[10]);
        if (!obj.isItemNSFW(item)) {
          data.push(item);
        }
      });
      const tmp15 = allUnreadItemsHydrated;
      if (tmp15) {
        const obj5 = { id: "end", timestamp: 0, unread: false, data: { kind: "end" } };
        data.push(obj5);
      }
      const arr2 = readItems;
      if (readItems.length > 0) {
        const item1 = arr2.forEach((item) => {
          const obj = notificationItem(unreadItems[10]);
          if (!obj.isItemNSFW(item)) {
            data.push(item);
          }
        });
      }
      const tmp18 = stateFromStores3;
      if (tmp18) {
        const obj6 = { id: "bottomLoading", timestamp: 0, unread: false, data: { kind: "bottomLoading" } };
        data.push(obj6);
      }
    }
    return { data, stickyHeaderIndices: [] };
  }, items10);
  return { data: memo1.data, loading: stateFromStores1, version: stateFromStores, visibleItemIds: arr6, endVisible: first, isRefreshing: stateFromStores2, handleOnRefresh: iCYMIReloadHandler, stickyHeaderIndices: memo1.stickyHeaderIndices, viewabilityConfigCallbackPairs: memo };
};
