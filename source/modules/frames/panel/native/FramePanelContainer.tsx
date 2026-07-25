// Module ID: 15779
// Function ID: 121730
// Dependencies: [31, 5658, 33, 566, 15780, 15782, 2]

// Module 15779
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function FramePanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != outer1_3.getConnectedFrame())) {
    obj = { children: jsx(importDefault(15782), {}) };
    tmp = jsx(importDefault(15780), { children: jsx(importDefault(15782), {}) });
    const tmp5 = importDefault(15780);
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
