// Module ID: 16199
// Function ID: 16200
// Dependencies: [19, 10564, 10565, 21, 589, 16200, 16202, 2]

// Module 16199
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
    obj[0] = jsx(importDefault(16202), {});
    tmp2 = jsx(importDefault(16200), { children: null });
    const tmp5 = importDefault(16200);
  }
  return tmp2;
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
