// Module ID: 10204
// Function ID: 78746
// Name: Notifications
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10204 (Notifications)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = arg1(dependencyMap[3]);
  const items = [__exportStarResult1];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { notification: stateFromStores };
    tmp2 = jsx(importDefault(dependencyMap[4]), obj, stateFromStores.key);
  }
  return tmp2;
};
