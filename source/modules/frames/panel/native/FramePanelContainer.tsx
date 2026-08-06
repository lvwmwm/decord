// Module ID: 16004
// Function ID: 16005
// Dependencies: [19, 10509, 10510, 21, 589, 16005, 16007, 2]

// Module 16004
import map from "map";
import { isLaunched } from "FrameLayoutModes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function FramePanelContainer() {
  let obj = require(589) /* initialize */;
  const items = [map];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()))) {
    obj = { children: null };
    obj[0] = jsx(importDefault(16007), {});
    tmp2 = jsx(importDefault(16005), { children: null });
    const tmp5 = importDefault(16005);
  }
  return tmp2;
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
