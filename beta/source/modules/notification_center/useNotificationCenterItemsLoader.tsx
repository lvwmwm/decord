// Module ID: 16050
// Function ID: 16051
// Name: useNotificationCenterItemsLoader
// Dependencies: [5, 32, 19, 7051, 7053, 16049, 5018, 504, 16051, 6531, 7695, 2]
// Exports: useNotificationCenterItemsLoader

// Module 16050 (useNotificationCenterItemsLoader)
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import NotificationCenterItemsActions from "NotificationCenterItemsActions" /* 16051 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RecentMentionsStore from "RecentMentionsStore" /* 7051 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7053 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16049 */;
import size from "module_2" /* 2 */;

let c2, with_mentions;

const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemsLoader.tsx");

export const PAGE_SIZE_WITH_MENTIONS = 8;
export const PAGE_SIZE = 20;
export const useNotificationCenterItemsLoader = function useNotificationCenterItemsLoader(isFocused) {
  let _undefined;
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
  c7 = undefined;
  let initialized;
  let obj = isFocused(isDesktop[7]);
  const items1 = [initialized];
  const stateFromStores = obj.useStateFromStores(items1, () => initialized.shouldReload());
  let closure_6 = stateFromStores.useRef(false);
  let tmp2 = initialPageSize(stateFromStores.useState(false), 2);
  [tmp3, c7] = tmp2;
  let obj2 = isFocused(isDesktop[7]);
  const items2 = [c7];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ initialized: _undefined.initialized, loading: _undefined.loading, items: _undefined.items, hasMore: _undefined.hasMore, cursor: _undefined.cursor, errored: _undefined.errored }));
  initialized = stateFromStoresObject.initialized;
  const items = stateFromStoresObject.items;
  const hasMore = stateFromStoresObject.hasMore;
  const cursor = stateFromStoresObject.cursor;
  const errored = stateFromStoresObject.errored;
  const loading = stateFromStoresObject.loading;
  let obj3 = isFocused(isDesktop[7]);
  const items3 = [closure_6];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items3, () => ({ everyoneFilter: closure_6.everyoneFilter, roleFilter: closure_6.roleFilter }));
  const roleFilter = stateFromStoresObject1.roleFilter;
  const everyoneFilter = stateFromStoresObject1.everyoneFilter;
  const effect = stateFromStores.useEffect(() => {
    let obj = isFocused(isDesktop[8]);
    const result = obj.setNotificationCenterActive(true);
    return () => {
      const obj = isFocused(isDesktop[8]);
      return obj.setNotificationCenterActive(false);
    };
  }, []);
  const items4 = [isFocused, initialized];
  const effect1 = stateFromStores.useEffect(() => {
    const tmp = initialized && isFocused;
    if (tmp) {
      const obj = ReadStateActionCreators;
      obj.ackUserFeature(ReadStateTypes.NOTIFICATION_CENTER);
    }
  }, items4);
  const tmp8 = navigatedAway(isDesktop[10])();
  let closure_15 = tmp8;
  const items5 = [navigatedAway, items, isDesktop, tmp8, errored];
  const effect2 = stateFromStores.useEffect(() => () => {
    const tmp = closure_1_2;
    if (tmp) {
      let tmp9 = !closure_1_15();
      closure_1_15();
      if (tmp9) {
        tmp9 = errored || items.length > 100;
        const tmp10 = errored || items.length > 100;
      }
      if (tmp9) {
        const obj2 = isFocused(isDesktop[8]);
        const result = obj2.resetNotificationCenter();
      }
    } else {
      const tmp2 = navigatedAway && items.length > 100;
      if (tmp2) {
        const obj = isFocused(isDesktop[8]);
        const result1 = obj.resetNotificationCenter();
      }
    }
  }, items5);
  const items6 = [initialized, stateFromStores, isFocused, flag, roleFilter, everyoneFilter, initialPageSize];
  const effect3 = stateFromStores.useEffect(() => {
    let tmp = !initialized;
    if (initialized) {
      tmp = stateFromStores && isFocused;
    }
    if (tmp) {
      let tmp6 = initialPageSize;
      const fetchNotificationCenterItems = NotificationCenterItemsActions.fetchNotificationCenterItems;
      NotificationCenterItemsActions;
      if (initialPageSize == null) {
        let num = 20;
        if (flag) {
          num = 8;
        }
        tmp6 = num;
      }
      const obj = { limit: tmp6, with_mentions: flag, roles_filter: roleFilter, everyone_filter: everyoneFilter };
      const notificationCenterItems = fetchNotificationCenterItems(obj);
    }
  }, items6);
  const useCallback = stateFromStores.useCallback;
  let closure_0 = flag(function*(arg0, value) {
    let num7;
    closure_0 = arg0;
    if (with_mentions === 2) {
      with_mentions = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        with_mentions = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            with_mentions = 3;
            throw value;
          } else if (arg0 === 2) {
            with_mentions = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let current = ref.current;
            const tmp27 = ref;
            if (!current) {
              current = !initialized;
            }
            if (!current) {
              current = !hasMore;
            }
            if (!current) {
              current = null == after;
            }
            if (!current) {
              let tmp12 = !tmp26;
              if (!closure_0) {
                tmp12 = errored;
              }
              current = tmp12;
            }
            if (!current) {
              tmp27.current = true;
              _undefined(true);
              const obj4 = { after, with_mentions, roles_filter, everyone_filter, limit: num7 };
              num7 = 20;
              const fetchNotificationCenterItems = closure_0(isDesktop[8]).fetchNotificationCenterItems;
              const tmp17 = closure_0(isDesktop[8]);
              if (with_mentions) {
                num7 = 8;
              }
              c2 = 1;
              with_mentions = 1;
              const obj5 = {
                value: fetchNotificationCenterItems(obj4, () => {
                            ref.current = false;
                          }),
                done: false
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          with_mentions = 3;
          throw value;
        } else if (arg0 === 2) {
          with_mentions = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          _undefined(false);
        }
        with_mentions = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp22) {
        with_mentions = 3;
        throw tmp22;
      }
    }
  });
  const items7 = [initialized, hasMore, cursor, errored, flag, roleFilter, everyoneFilter];
  let obj4 = {
    initialized,
    loading,
    items,
    hasMore,
    loadMore: useCallback(function() {
      return closure_0(...arguments);
    }, items7),
    loadingMore: tmp3,
    setReadNotifItemToAcked(acked) {
      if (!acked.acked) {
        acked.acked = true;
      }
    },
    errored
  };
  return obj4;
};
