// Module ID: 18493
// Function ID: 18494
// Name: useNotificationCenterItemAcked
// Dependencies: [18486, 504, 6860, 2]
// Exports: useNotificationCenterItemAcked

// Module 18493 (useNotificationCenterItemAcked)
import NotificationCenterStore from "NotificationCenterStore" /* 18486 */;
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
      const tmpResult = tmp(6860);
      stateFromStores = tmpResult.isRemoteAcked(forceUnacked, ackedBeforeId);
    }
    tmp4 = stateFromStores;
  }
  return tmp4;
}
