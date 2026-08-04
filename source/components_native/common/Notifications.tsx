// Module ID: 9665
// Function ID: 9666
// Name: Notifications
// Dependencies: [19, 9666, 21, 589, 9699, 2]
// Exports: default

// Module 9665 (Notifications)
import "noop";
import handleAlertMessage from "handleAlertMessage";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = require(589) /* initialize */;
  const items = [handleAlertMessage];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: null };
    obj[0] = stateFromStores;
    tmp3 = jsx(importDefault(9699), { notification: null }, stateFromStores.key);
  }
  return tmp3;
};
