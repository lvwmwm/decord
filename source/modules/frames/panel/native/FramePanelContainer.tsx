// Module ID: 15721
// Function ID: 121239
// Dependencies: [31, 10479, 33, 566, 15722, 15724, 2]

// Module 15721
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function FramePanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != outer1_3.getConnectedFrame())) {
    obj = { children: jsx(importDefault(15724), {}) };
    tmp = jsx(importDefault(15722), { children: jsx(importDefault(15724), {}) });
    const tmp5 = importDefault(15722);
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
