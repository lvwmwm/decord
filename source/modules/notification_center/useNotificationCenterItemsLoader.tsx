// Module ID: 15025
// Function ID: 113151
// Name: PAGE_SIZE_WITH_MENTIONS
// Dependencies: []
// Exports: useNotificationCenterItemsLoader

// Module 15025 (PAGE_SIZE_WITH_MENTIONS)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ReadStateTypes = arg1(dependencyMap[6]).ReadStateTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = function useNotificationCenterItemsLoader(isFocused) {
  let tmp3;
  isFocused = isFocused.isFocused;
  const arg1 = isFocused;
  const navigatedAway = isFocused.navigatedAway;
  const importDefault = navigatedAway;
  const isDesktop = isFocused.isDesktop;
  const dependencyMap = isDesktop;
  let flag = isFocused.withMentions;
  if (flag === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  const initialPageSize = isFocused.initialPageSize;
  const callback = initialPageSize;
  let React;
  let closure_6;
  let closure_7;
  let closure_8;
  let ReadStateTypes;
  let hasMore;
  let cursor;
  let errored;
  let roleFilter;
  let everyoneFilter;
  let tmp8;
  let obj = arg1(dependencyMap[7]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => initialized.shouldReload());
  React = stateFromStores;
  closure_6 = React.useRef(false);
  [tmp3, closure_7] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  const items1 = [closure_7];
  const stateFromStoresObject = arg1(dependencyMap[7]).useStateFromStoresObject(items1, () => ({ initialized: _undefined.initialized, loading: _undefined.loading, items: _undefined.items, hasMore: _undefined.hasMore, cursor: _undefined.cursor, errored: _undefined.errored }));
  const initialized = stateFromStoresObject.initialized;
  closure_8 = initialized;
  items = stateFromStoresObject.items;
  ReadStateTypes = items;
  hasMore = stateFromStoresObject.hasMore;
  cursor = stateFromStoresObject.cursor;
  errored = stateFromStoresObject.errored;
  const obj2 = arg1(dependencyMap[7]);
  const items2 = [closure_6];
  const stateFromStoresObject1 = arg1(dependencyMap[7]).useStateFromStoresObject(items2, () => ({ everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter }));
  roleFilter = stateFromStoresObject1.roleFilter;
  everyoneFilter = stateFromStoresObject1.everyoneFilter;
  const effect = React.useEffect(() => {
    const result = isFocused(isDesktop[8]).setNotificationCenterActive(true);
    return () => callback(closure_2[8]).setNotificationCenterActive(false);
  }, []);
  const items3 = [isFocused, initialized];
  const effect1 = React.useEffect(() => {
    let tmp = initialized;
    if (initialized) {
      tmp = isFocused;
    }
    if (tmp) {
      isFocused(isDesktop[9]).ackUserFeature(items.NOTIFICATION_CENTER);
      const obj = isFocused(isDesktop[9]);
    }
  }, items3);
  tmp8 = importDefault(dependencyMap[10])();
  const items4 = [navigatedAway, items, isDesktop, tmp8, errored];
  const effect2 = React.useEffect(() => () => {
    if (closure_2) {
      let tmp7 = !callback2();
      if (tmp7) {
        let tmp8 = closure_12;
        if (!closure_12) {
          tmp8 = closure_9.length > 100;
        }
        tmp7 = tmp8;
      }
      if (tmp7) {
        const result = callback(closure_2[8]).resetNotificationCenter();
        const obj2 = callback(closure_2[8]);
      }
    } else {
      let tmp = closure_1;
      if (closure_1) {
        tmp = closure_9.length > 100;
      }
      if (tmp) {
        const result1 = callback(closure_2[8]).resetNotificationCenter();
        const obj = callback(closure_2[8]);
      }
    }
  }, items4);
  const items5 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
  const effect3 = React.useEffect(() => {
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
    loadMore: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = flag(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items6),
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
