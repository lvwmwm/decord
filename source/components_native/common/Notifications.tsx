// Module ID: 9811
// Function ID: 9812
// Name: Notifications
// Dependencies: [19, 9812, 21, 589, 9845, 2]
// Exports: default

// Module 9811 (Notifications)
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
    tmp3 = jsx(importDefault(9845), { notification: null }, stateFromStores.key);
  }
  return tmp3;
};
