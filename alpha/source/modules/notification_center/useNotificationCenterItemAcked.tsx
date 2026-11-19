// Module ID: 18103
// Function ID: 18104
// Name: useNotificationCenterItemAcked
// Dependencies: [18096, 504, 6517, 2]
// Exports: useNotificationCenterItemAcked

// Module 18103 (useNotificationCenterItemAcked)
import NotificationCenterStore from "NotificationCenterStore" /* 18096 */;
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
      const tmpResult = tmp(6517);
      stateFromStores = tmpResult.isRemoteAcked(forceUnacked, ackedBeforeId);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
}
