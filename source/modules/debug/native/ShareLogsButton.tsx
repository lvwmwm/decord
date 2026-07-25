// Module ID: 14457
// Function ID: 110510
// Dependencies: [31, 33, 4661, 1212, 8134, 12, 12230, 2]

// Module 14457
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function ShareLogsButton() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["Aw+09z"]);
  obj.onPress = function onPress() {
    let obj = outer1_0(outer1_1[4]);
    obj = { message: outer1_0(outer1_1[5]).stringify() };
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj.children = jsx(require(12230) /* ShareIcon */.ShareIcon, {});
  return jsx(require(4661) /* PressableBase */.PressableOpacity, {});
});
const result = require("PressableBase").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
