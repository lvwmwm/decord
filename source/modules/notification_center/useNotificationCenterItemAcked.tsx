// Module ID: 16343
// Function ID: 16344
// Name: useNotificationCenterItemAcked
// Dependencies: [16336, 586, 7574, 2]
// Exports: useNotificationCenterItemAcked

// Module 16343 (useNotificationCenterItemAcked)
import closure_2 from "handleLoadFinished" /* 16336 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(item, ackedBeforeId) {
  const _require = item;
  const items = [closure_2];
  let stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.isLocalItemAcked(closure_0));
  const forceUnacked = item.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = _require(7574).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(7574);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};
