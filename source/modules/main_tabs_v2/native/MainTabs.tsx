// Module ID: 14787
// Function ID: 112781
// Dependencies: [31, 27, 33, 4130, 3977, 8831, 1557, 3842, 4662, 14788, 2]

// Module 14787
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
  let obj = require(8831) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(3977)();
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp };
  const items1 = [callback(importDefault(4662), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(14788), {})];
  obj.children = items1;
  obj.children = callback2(require(3842) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
