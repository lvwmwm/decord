// Module ID: 16156
// Function ID: 16157
// Dependencies: [19, 21, 4342, 15598, 2]

// Module 16156
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = require("noop").memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(importDefault(15598), { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
