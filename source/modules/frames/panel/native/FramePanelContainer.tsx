// Module ID: 16961
// Function ID: 16962
// Dependencies: [19, 9439, 9440, 21, 586, 16962, 16964, 2]

// Module 16961
import initialize from "initialize" /* 586 */;
import FramePanelControllerDefault from "FramePanelController" /* 16962 */;
import renderActivityOrPIPDefault from "renderActivityOrPIP" /* 16964 */;
import closure_3 from "map" /* 9439 */;
import { isLaunched } from "FrameLayoutModes" /* 9440 */;
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
