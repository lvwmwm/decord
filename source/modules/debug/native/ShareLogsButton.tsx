// Module ID: 14938
// Function ID: 14939
// Dependencies: [19, 21, 5438, 1236, 9104, 7, 12099, 2]

// Module 14938
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 5438 */;
import ShareIcon from "ShareIcon" /* 12099 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["Aw+09z"]);
  obj[1] = function onPress() {
    let obj = callback(9104);
    obj = { message: callback(7).stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj[2] = jsx(ShareIcon.ShareIcon, {});
  return jsx(PressableBase.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
const result = require("set").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
