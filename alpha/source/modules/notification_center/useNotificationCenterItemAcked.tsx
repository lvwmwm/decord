// Module ID: 18275
// Function ID: 18276
// Name: useNotificationCenterItemAcked
// Dependencies: [18268, 504, 6950, 2]
// Exports: useNotificationCenterItemAcked

// Module 18275 (useNotificationCenterItemAcked)
import NotificationCenterStore from "NotificationCenterStore" /* 18268 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export function useNotificationCenterItemAcked(forceUnacked, ackedBeforeId) {
  _require = forceUnacked;
  const items = [NotificationCenterStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => NotificationCenterStore.isLocalItemAcked(forceUnacked));
  let tmp4 = !forceUnacked.forceUnacked;
  const tmp = _require;
  if (tmp4) {
    if (!stateFromStores) {
      const tmpResult = tmp(6950);
      stateFromStores = tmpResult.isRemoteAcked(forceUnacked, ackedBeforeId);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
}
