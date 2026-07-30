// Module ID: 15816
// Function ID: 15817
// Dependencies: [19, 21, 4189, 15265, 2]

// Module 15816
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = require("noop").memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(importDefault(15265), { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
