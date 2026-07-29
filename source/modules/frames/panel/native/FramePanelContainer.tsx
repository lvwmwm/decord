// Module ID: 15865
// Function ID: 15866
// Dependencies: [19, 5686, 21, 589, 15866, 15868, 2]

// Module 15865
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
    obj[0] = jsx(importDefault(15868), {});
    tmp2 = jsx(importDefault(15866), { children: null });
    const tmp5 = importDefault(15866);
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
