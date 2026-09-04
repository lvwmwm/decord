// Module ID: 15490
// Function ID: 15491
// Dependencies: [19, 21, 5084, 1233, 8291, 7, 8983, 2]

// Module 15490
import getSystemLocale from "getSystemLocale" /* 1233 */;
import PressableBase from "PressableBase" /* 5084 */;
import ShareIcon from "ShareIcon" /* 8983 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["Aw+09z"]);
  obj[1] = function onPress() {
    let obj = callback(8291);
    obj = { message: callback(7).stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj[2] = jsx(ShareIcon.ShareIcon, {});
  return jsx(PressableBase.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
const result = require("set").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
