// Module ID: 16114
// Function ID: 16115
// Dependencies: [19, 10592, 10593, 21, 589, 16115, 16117, 2]

// Module 16114
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
    obj[0] = jsx(importDefault(16117), {});
    tmp2 = jsx(importDefault(16115), { children: null });
    const tmp5 = importDefault(16115);
  }
  return tmp2;
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
