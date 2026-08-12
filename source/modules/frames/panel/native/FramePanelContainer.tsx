// Module ID: 16188
// Function ID: 16189
// Dependencies: [19, 10650, 10651, 21, 589, 16189, 16191, 2]

// Module 16188
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
    obj[0] = jsx(importDefault(16191), {});
    tmp2 = jsx(importDefault(16189), { children: null });
    const tmp5 = importDefault(16189);
  }
  return tmp2;
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
