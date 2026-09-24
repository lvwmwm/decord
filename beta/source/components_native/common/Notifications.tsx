// Module ID: 12982
// Function ID: 12983
// Name: common/Notifications
// Dependencies: [19, 12983, 21, 558, 568, 504, 13004, 2]

// Module 12982 (common/Notifications)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 13004 */;
import noop from "module_19" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 12983 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2 = dependencyMap;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InAppNotificationStore];
    const fn = function c() {
      return currentNotification.getCurrentNotification();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[2] !== stateFromStores) {
    const obj2 = { notification: stateFromStores };
    tmp2 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
    cResult[2] = stateFromStores;
    cResult[3] = tmp2;
  }
}) : (() => {
  const items = [InAppNotificationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { notification: stateFromStores };
    tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp3;
});
