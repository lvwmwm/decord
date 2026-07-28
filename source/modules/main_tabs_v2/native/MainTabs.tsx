// Module ID: 14890
// Function ID: 113408
// Dependencies: [31, 27, 33, 4165, 4012, 8802, 1557, 3877, 4697, 14891, 2]

// Module 14890
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
  let obj = require(8802) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(4012)();
  const rect = importDefault(1557)();
  obj = { style: items };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp };
  const items1 = [callback(importDefault(4697), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(14891), {})];
  obj.children = items1;
  obj.children = callback2(require(3877) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
