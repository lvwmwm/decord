// Module ID: 15830
// Function ID: 121933
// Dependencies: [31, 5668, 33, 566, 15831, 15833, 2]

// Module 15830
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function FramePanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != outer1_3.getConnectedFrame())) {
    obj = { children: jsx(importDefault(15833), {}) };
    tmp = jsx(importDefault(15831), { children: jsx(importDefault(15833), {}) });
    const tmp5 = importDefault(15831);
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
