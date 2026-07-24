// Module ID: 15768
// Function ID: 121561
// Dependencies: [31, 10508, 33, 566, 15769, 15771, 2]

// Module 15768
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function FramePanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != outer1_3.getConnectedFrame())) {
    obj = { children: jsx(importDefault(15771), {}) };
    tmp = jsx(importDefault(15769), { children: jsx(importDefault(15771), {}) });
    const tmp5 = importDefault(15769);
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
