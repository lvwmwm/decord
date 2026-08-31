// Module ID: 16584
// Function ID: 16585
// Dependencies: [19, 9425, 9426, 21, 589, 16585, 16587, 2]

// Module 16584
import initialize from "initialize" /* 589 */;
import FramePanelControllerDefault from "FramePanelController" /* 16585 */;
import renderActivityOrPIPDefault from "renderActivityOrPIP" /* 16587 */;
import closure_3 from "map" /* 9425 */;
import { isLaunched } from "FrameLayoutModes" /* 9426 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function FramePanelContainer() {
  let obj = initialize;
  const items = [closure_3];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()))) {
    obj = { children: null };
    obj[0] = jsx(renderActivityOrPIPDefault, {});
    tmp2 = jsx(FramePanelControllerDefault, { children: null });
    const tmp5 = FramePanelControllerDefault;
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
