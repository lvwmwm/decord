// Module ID: 15034
// Function ID: 15035
// Dependencies: [19, 17, 21, 4285, 4132, 8204, 1581, 3997, 4814, 15035, 2]

// Module 15034
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
  let obj = require(8204) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(4132)();
  const rect = importDefault(1581)();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(importDefault(4814), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(15035), {})];
  obj[1] = items1;
  obj[1] = callback2(require(3997) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
