// Module ID: 14626
// Function ID: 14627
// Dependencies: [19, 21, 4797, 1236, 8817, 7, 12114, 2]

// Module 14626
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["Aw+09z"]);
  obj[1] = function onPress() {
    let obj = callback(8817);
    obj = { message: null };
    obj[0] = callback(7).stringify();
    return obj.showShareActionSheet(obj, "Debug Logs");
  };
  obj[2] = jsx(require(12114) /* ShareIcon */.ShareIcon, {});
  return jsx(require(4797) /* PressableBase */.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
const result = require("PressableBase").fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
