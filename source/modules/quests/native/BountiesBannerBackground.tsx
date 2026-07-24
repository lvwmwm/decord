// Module ID: 14035
// Function ID: 107390
// Dependencies: [31, 27, 4122, 33, 566, 8346, 4554, 2]

// Module 14035
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = [0, 0.6];
let closure_9 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const memoResult = require("result").memo(function BountiesBannerBackground(arg0) {
  let children;
  let style;
  let uri;
  ({ children, style, uri } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { style };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  obj = { source: { uri }, style: closure_3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  const items1 = [callback(require(8346) /* _isNativeReflectConstruct */.VideoComponent, obj), callback(importDefault(4554), { colors: closure_9, locations: closure_8, style: closure_3.absoluteFillObject }), children];
  obj.children = items1;
  return callback2(closure_4, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;
