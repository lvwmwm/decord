// Module ID: 11170
// Function ID: 11171
// Name: Notifications
// Dependencies: [19, 11171, 21, 504, 11199, 2]
// Exports: default

// Module 11170 (Notifications)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 11199 */;
import react from "react" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 11171 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let currentNotification;
  const items = [InAppNotificationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp3;
};
