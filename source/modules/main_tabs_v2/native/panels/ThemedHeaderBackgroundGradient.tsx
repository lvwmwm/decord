// Module ID: 15325
// Function ID: 116902
// Dependencies: [31, 27, 33, 4131, 689, 1557, 3835, 665, 4555, 2]

// Module 15325
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const memoResult = require("result").memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = importDefault(689).colors.BACKGROUND_BASE_LOWEST;
  }
  let num2 = baseColor.minHeight;
  if (num2 === undefined) {
    num2 = 16;
  }
  const tmp3 = callback();
  let obj = require(3835) /* map */;
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  let obj1 = require(665) /* pad2 */;
  const hex2rgbResult = obj1.hex2rgb(token, 0);
  let str = "transparent";
  if (null != hex2rgbResult) {
    str = hex2rgbResult;
  }
  obj = {};
  const items = [tmp3.container, ];
  obj = { height: Math.max(importDefault(1557)().top, num2) };
  items[1] = obj;
  obj.style = items;
  obj.pointerEvents = "none";
  obj1 = { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
  items1 = [token, str];
  obj.children = jsx(importDefault(4555), { style: absoluteFill.absoluteFill, colors: items1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } });
  return <closure_4 height={Math.max(importDefault(1557)().top, num2)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;
