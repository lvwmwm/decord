// Module ID: 16201
// Function ID: 16202
// Dependencies: [19, 21, 16192, 16189, 2]

// Module 16201
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(importDefault(16192));
  ({ mode, wrapperDimensions } = context);
  return jsx(require(16189) /* BaseActivityPanelSystemUIManager */.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
