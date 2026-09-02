// Module ID: 10183
// Function ID: 10184
// Name: Notifications
// Dependencies: [19, 10184, 21, 586, 10210, 2]
// Exports: default

// Module 10183 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10210 */;
import closure_3 from "handleAlertMessage" /* 10184 */;
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
