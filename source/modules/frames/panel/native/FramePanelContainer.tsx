// Module ID: 16030
// Function ID: 16031
// Dependencies: [19, 10525, 10526, 21, 589, 16031, 16033, 2]

// Module 16030
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
    obj[0] = jsx(importDefault(16033), {});
    tmp2 = jsx(importDefault(16031), { children: null });
    const tmp5 = importDefault(16031);
  }
  return tmp2;
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
