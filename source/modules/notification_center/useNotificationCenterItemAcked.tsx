// Module ID: 15451
// Function ID: 15452
// Name: useNotificationCenterItemAcked
// Dependencies: [15444, 589, 7042, 2]
// Exports: useNotificationCenterItemAcked

// Module 15451 (useNotificationCenterItemAcked)
import handleLoadFinished from "handleLoadFinished";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [handleLoadFinished];
  let stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _require(7042).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(7042);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};
