// Module ID: 10007
// Function ID: 10008
// Name: Notifications
// Dependencies: [19, 10008, 21, 586, 10034, 2]
// Exports: default

// Module 10007 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10034 */;
import closure_3 from "handleAlertMessage" /* 10008 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: null };
    obj[0] = stateFromStores;
    tmp3 = jsx(NotificationWrapperDefault, { notification: null }, stateFromStores.key);
  }
  return tmp3;
};
