// Module ID: 14396
// Function ID: 110060
// Dependencies: [31, 33, 4660, 1212, 8332, 12, 12227, 2]

// Module 14396
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
  obj.children = jsx(require(12227) /* ShareIcon */.ShareIcon, {});
  return jsx(require(4660) /* PressableBase */.PressableOpacity, {});
});
const result = require("PressableBase").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
