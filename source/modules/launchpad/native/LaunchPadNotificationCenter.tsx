// Module ID: 16071
// Function ID: 16072
// Dependencies: [19, 21, 4303, 15516, 2]

// Module 16071
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = require("noop").memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(importDefault(15516), { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
