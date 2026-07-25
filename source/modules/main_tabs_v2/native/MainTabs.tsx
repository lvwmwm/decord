// Module ID: 14845
// Function ID: 113230
// Dependencies: [31, 27, 33, 4131, 3978, 8758, 1557, 3843, 4663, 14846, 2]

// Module 14845
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
const memoResult = require("result").memo(function MainTabs() {
  let obj = require(8758) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(3978)();
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp };
  const items1 = [callback(importDefault(4663), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(14846), {})];
  obj.children = items1;
  obj.children = callback2(require(3843) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
