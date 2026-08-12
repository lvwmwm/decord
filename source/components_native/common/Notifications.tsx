// Module ID: 9796
// Function ID: 9797
// Name: Notifications
// Dependencies: [19, 9797, 21, 589, 9830, 2]
// Exports: default

// Module 9796 (Notifications)
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
    tmp3 = jsx(importDefault(9830), { notification: null }, stateFromStores.key);
  }
  return tmp3;
};
