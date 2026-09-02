// Module ID: 16238
// Function ID: 16239
// Name: useNotificationCenterItemAcked
// Dependencies: [16231, 586, 7395, 2]
// Exports: useNotificationCenterItemAcked

// Module 16238 (useNotificationCenterItemAcked)
import closure_2 from "handleLoadFinished" /* 16231 */;

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
      stateFromStores = _require(7395).isRemoteAcked(item, ackedBeforeId);
      const tmpResult = _require(7395);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};
