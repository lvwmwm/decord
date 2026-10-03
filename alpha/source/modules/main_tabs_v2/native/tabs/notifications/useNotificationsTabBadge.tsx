// Module ID: 16332
// Function ID: 16333
// Name: useNotificationsTabBadge
// Dependencies: [19, 7124, 558, 576, 504, 7125, 2]

// Module 16332 (useNotificationsTabBadge)
import react2 from "react" /* 576 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import react from "react" /* 19 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr3;
  let localItems;
  let tmp4;
  let tmp5;
  const tmp = require;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NotificationCenterItemsStore];
    const fn = function n() {
      return localItems.localItems;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function l(type) {
        const tmp3 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS || type.type === tmp(tmp2[5]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS || type.type === tmp(tmp2[5]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
        return tmp3;
      };
      cResult[4] = fn2;
      tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const found = stateFromStores.filter(tmp7);
    cResult[2] = stateFromStores;
    cResult[3] = found;
    arr3 = found;
  } else {
    arr3 = cResult[3];
  }
  if (cResult[5] === arr3.length) {
    let tmp10;
    if (cResult[6] === arr3.length > 0) {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  const obj2 = { value: arr3.length, showDot: arr3.length > 0 };
  cResult[5] = arr3.length;
  cResult[6] = arr3.length > 0;
  cResult[7] = obj2;
  tmp10 = obj2;
}) : (() => {
  let localItems;
  let stateFromStores;
  const items = [NotificationCenterItemsStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => localItems.localItems);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores.filter((type) => {
    const tmp3 = type.type === stateFromStores(closure_1_1[5]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS || type.type === tmp(tmp2[5]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS || type.type === tmp(tmp2[5]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
    return tmp3;
  }).length, items1);
  return { value: memo, showDot: memo > 0 };
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx");

export default tmp2;
