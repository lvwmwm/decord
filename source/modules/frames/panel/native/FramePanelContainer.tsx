// Module ID: 15964
// Function ID: 15965
// Dependencies: [19, 10478, 21, 589, 15965, 15967, 2]

// Module 15964
import map from "map";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function FramePanelContainer() {
  let obj = require(589) /* initialize */;
  const items = [map];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => null != connectedFrame.getConnectedFrame())) {
    obj = { children: null };
    obj[0] = jsx(importDefault(15967), {});
    tmp2 = jsx(importDefault(15965), { children: null });
    const tmp5 = importDefault(15965);
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
