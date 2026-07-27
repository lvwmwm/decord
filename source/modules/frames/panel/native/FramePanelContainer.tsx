// Module ID: 15791
// Function ID: 121777
// Dependencies: [31, 5658, 33, 566, 15792, 15794, 2]

// Module 15791
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function FramePanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != outer1_3.getConnectedFrame())) {
    obj = { children: jsx(importDefault(15794), {}) };
    tmp = jsx(importDefault(15792), { children: jsx(importDefault(15794), {}) });
    const tmp5 = importDefault(15792);
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
