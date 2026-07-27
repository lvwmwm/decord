// Module ID: 10181
// Function ID: 78673
// Name: Notifications
// Dependencies: [31, 10182, 33, 566, 10215, 2]
// Exports: default

// Module 10181 (Notifications)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentNotification());
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { notification: stateFromStores };
    tmp2 = jsx(importDefault(10215), { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp2;
};
