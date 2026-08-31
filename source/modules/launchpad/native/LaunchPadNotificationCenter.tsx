// Module ID: 16541
// Function ID: 16542
// Dependencies: [19, 21, 4448, 15954, 2]

// Module 16541
import goBackDefault from "goBack" /* 15954 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importAllResult from "noop" /* 19 */;

let closure_3 = createCacheKey.createStyles({ wrapper: { height: "100%" } });
const memoResult = importAllResult.memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(goBackDefault, { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
