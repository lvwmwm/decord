// Module ID: 16762
// Function ID: 16763
// Name: useNotificationCenterItemAcked
// Dependencies: [16755, 504, 7909, 2]
// Exports: useNotificationCenterItemAcked

// Module 16762 (useNotificationCenterItemAcked)
import NotificationCenterStore from "NotificationCenterStore" /* 16755 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = function useNotificationCenterItemAcked(forceUnacked, ackedBeforeId) {
  _require = forceUnacked;
  const items = [NotificationCenterStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => NotificationCenterStore.isLocalItemAcked(closure_0));
  forceUnacked = forceUnacked.forceUnacked;
  let tmp4 = !forceUnacked;
  if (!forceUnacked) {
    if (!stateFromStores) {
      stateFromStores = require("NotificationCenterUtils").isRemoteAcked(forceUnacked, ackedBeforeId);
      const tmpResult = require("NotificationCenterUtils");
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
};
