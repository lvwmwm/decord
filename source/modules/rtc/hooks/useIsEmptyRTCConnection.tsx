// Module ID: 8912
// Function ID: 70318
// Name: isEmpty
// Dependencies: [57, 31, 27, 33, 4126]
// Exports: useIsCallRTCConnectionEmpty, useIsStreamRTCConnectionEmpty

// Module 8912 (isEmpty)
import _slicedToArray from "_slicedToArray";
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  const arg1 = stateFromStores4;
  const items = [getActivityIndicator, _slicedToArray];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    if (null == arg0) {
      return true;
    } else {
      const userIds = userIds.getUserIds(arg0);
      let tmp4 = null == userIds;
      if (!tmp4) {
        tmp4 = callback(userIds, id.getId());
      }
      return tmp4;
    }
  });
};
export const useIsCallRTCConnectionEmpty = function useIsCallRTCConnectionEmpty() {
  const items = [module_31, _slicedToArray];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const userIds = userIds.getUserIds();
    let tmp2 = null == userIds;
    if (!tmp2) {
      tmp2 = callback(userIds, id.getId());
    }
    return tmp2;
  });
};
