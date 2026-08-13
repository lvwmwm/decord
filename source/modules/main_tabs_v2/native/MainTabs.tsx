// Module ID: 15205
// Function ID: 15206
// Dependencies: [19, 17, 21, 4342, 4193, 8442, 1628, 4072, 4889, 15206, 2]

// Module 15205
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = require("noop").memo(function MainTabs() {
  let obj = require(8442) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(4193)();
  const rect = importDefault(1628)();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(importDefault(4889), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(15206), {})];
  obj[1] = items1;
  obj[1] = callback2(require(4072) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
