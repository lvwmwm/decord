// Module ID: 15256
// Function ID: 116068
// Name: useNotificationCenterItemAcked
// Dependencies: [15249, 566, 5908, 2]
// Exports: useNotificationCenterItemAcked

// Module 15256 (useNotificationCenterItemAcked)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.isLocalItemAcked(closure_0));
  let tmp2 = !item.forceUnacked;
  if (tmp2) {
    if (!stateFromStores) {
      stateFromStores = _require(5908).isRemoteAcked(item, ackedBeforeId);
      const obj2 = _require(5908);
    }
    tmp2 = stateFromStores;
  }
  return tmp2;
};
