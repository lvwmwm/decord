// Module ID: 10198
// Function ID: 78728
// Name: Notifications
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10198 (Notifications)
import "result";
import closure_3 from "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { notification: stateFromStores };
    tmp2 = jsx(importDefault(dependencyMap[4]), obj, stateFromStores.key);
  }
  return tmp2;
};
