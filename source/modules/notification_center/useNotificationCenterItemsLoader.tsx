// Module ID: 15140
// Function ID: 115320
// Name: PAGE_SIZE_WITH_MENTIONS
// Dependencies: [5, 57, 31, 6880, 6882, 15139, 4326, 566, 15141, 5069, 7885, 2]
// Exports: useNotificationCenterItemsLoader

// Module 15140 (PAGE_SIZE_WITH_MENTIONS)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ReadStateTypes } from "ReadStateTypes";

const require = arg1;
let result = require("result").fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = function useNotificationCenterItemsLoader(isFocused) {
  let c7;
  let tmp3;
  isFocused = isFocused.isFocused;
  const navigatedAway = isFocused.navigatedAway;
  const isDesktop = isFocused.isDesktop;
  let flag = isFocused.withMentions;
  if (flag === undefined) {
    flag = false;
  }
  const initialPageSize = isFocused.initialPageSize;
  let stateFromStores;
  let closure_6;
  c7 = undefined;
  let initialized;
  let items;
  let hasMore;
  let cursor;
  let errored;
  let roleFilter;
  let everyoneFilter;
  let c15;
  let obj = isFocused(isDesktop[7]);
  items = [initialized];
  stateFromStores = obj.useStateFromStores(items, () => initialized.shouldReload());
  closure_6 = stateFromStores.useRef(false);
  [tmp3, c7] = initialPageSize(stateFromStores.useState(false), 2);
  let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
  const items1 = [c7];
  const stateFromStoresObject = isFocused(isDesktop[7]).useStateFromStoresObject(items1, () => ({ initialized: _undefined.initialized, loading: _undefined.loading, items: _undefined.items, hasMore: _undefined.hasMore, cursor: _undefined.cursor, errored: _undefined.errored }));
  initialized = stateFromStoresObject.initialized;
  items = stateFromStoresObject.items;
  hasMore = stateFromStoresObject.hasMore;
  cursor = stateFromStoresObject.cursor;
  errored = stateFromStoresObject.errored;
  let obj2 = isFocused(isDesktop[7]);
  const items2 = [closure_6];
  const stateFromStoresObject1 = isFocused(isDesktop[7]).useStateFromStoresObject(items2, () => ({ everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter }));
  roleFilter = stateFromStoresObject1.roleFilter;
  everyoneFilter = stateFromStoresObject1.everyoneFilter;
  const effect = stateFromStores.useEffect(() => {
    const result = isFocused(isDesktop[8]).setNotificationCenterActive(true);
    return () => isFocused(isDesktop[8]).setNotificationCenterActive(false);
  }, []);
  const items3 = [isFocused, initialized];
  const effect1 = stateFromStores.useEffect(() => {
    let tmp = initialized;
    if (initialized) {
      tmp = isFocused;
    }
    if (tmp) {
      isFocused(isDesktop[9]).ackUserFeature(items.NOTIFICATION_CENTER);
      const obj = isFocused(isDesktop[9]);
    }
  }, items3);
  let tmp8 = navigatedAway(isDesktop[10])();
  c15 = tmp8;
  const items4 = [navigatedAway, items, isDesktop, tmp8, errored];
  const effect2 = stateFromStores.useEffect(() => () => {
    if (outer1_2) {
      let tmp7 = !outer1_15();
      if (tmp7) {
        let tmp8 = outer1_12;
        if (!outer1_12) {
          tmp8 = outer1_9.length > 100;
        }
        tmp7 = tmp8;
      }
      if (tmp7) {
        const result = isFocused(isDesktop[8]).resetNotificationCenter();
        const obj2 = isFocused(isDesktop[8]);
      }
    } else {
      let tmp = outer1_1;
      if (outer1_1) {
        tmp = outer1_9.length > 100;
      }
      if (tmp) {
        const result1 = isFocused(isDesktop[8]).resetNotificationCenter();
        const obj = isFocused(isDesktop[8]);
      }
    }
  }, items4);
  const items5 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
  const effect3 = stateFromStores.useEffect(() => {
    let tmp = !initialized;
    if (!tmp) {
      let tmp2 = stateFromStores;
      if (stateFromStores) {
        tmp2 = isFocused;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let notificationCenterItems = isFocused(isDesktop[8]);
      notificationCenterItems = {};
      if (null != initialPageSize) {
        let num2 = initialPageSize;
      } else {
        num2 = 20;
        if (flag) {
          num2 = 8;
        }
      }
      notificationCenterItems.limit = num2;
      notificationCenterItems.with_mentions = flag;
      notificationCenterItems.roles_filter = roleFilter;
      notificationCenterItems.everyone_filter = everyoneFilter;
      notificationCenterItems = notificationCenterItems.fetchNotificationCenterItems(notificationCenterItems);
    }
  }, items5);
  const items6 = [initialized, hasMore, cursor, errored, flag, roleFilter, everyoneFilter];
  obj = {
    initialized,
    loading: stateFromStoresObject.loading,
    items,
    hasMore,
    loadMore: stateFromStores.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = flag(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items6),
    loadingMore: tmp3,
    setReadNotifItemToAcked(acked) {
      if (!acked.acked) {
        acked.acked = true;
      }
    },
    errored
  };
  return obj;
};
