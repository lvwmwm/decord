// Module ID: 8919
// Function ID: 70359
// Name: isEmpty
// Dependencies: [1194, 4202, 4216, 566, 2]
// Exports: useIsCallRTCConnectionEmpty, useIsStreamRTCConnectionEmpty

// Module 8919 (isEmpty)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function isEmpty(size) {
  let tmp = 0 === size.size;
  if (!tmp) {
    let hasItem = 1 === size.size;
    if (hasItem) {
      hasItem = size.has(arg1);
    }
    tmp = hasItem;
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [closure_4, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = outer1_4.getUserIds(closure_0);
      let tmp4 = null == userIds;
      if (!tmp4) {
        tmp4 = outer1_5(userIds, outer1_2.getId());
      }
      return tmp4;
    }
  });
};
export const useIsCallRTCConnectionEmpty = function useIsCallRTCConnectionEmpty() {
  const items = [closure_3, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const userIds = outer1_3.getUserIds();
    let tmp2 = null == userIds;
    if (!tmp2) {
      tmp2 = outer1_5(userIds, outer1_2.getId());
    }
    return tmp2;
  });
};
