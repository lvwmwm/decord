// Module ID: 11011
// Function ID: 11012
// Name: Notifications
// Dependencies: [19, 11012, 21, 504, 11040, 2]
// Exports: default

// Module 11011 (Notifications)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 11040 */;
import react from "react" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 11012 */;
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
