// Module ID: 15841
// Function ID: 121980
// Dependencies: [31, 33, 15832, 15829, 2]

// Module 15841
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(importDefault(15832));
  ({ mode, wrapperDimensions } = context);
  return jsx(require(15829) /* BaseActivityPanelSystemUIManager */.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
