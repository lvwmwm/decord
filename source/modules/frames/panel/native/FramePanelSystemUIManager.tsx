// Module ID: 16969
// Function ID: 16970
// Dependencies: [19, 21, 16963, 16960, 2]

// Module 16969
import BaseActivityPanelSystemUIManager from "BaseActivityPanelSystemUIManager" /* 16960 */;
import contextDefault from "context" /* 16963 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const context = importAllResult.useContext(contextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(BaseActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
