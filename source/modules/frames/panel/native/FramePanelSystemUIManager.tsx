// Module ID: 15779
// Function ID: 121608
// Dependencies: [31, 33, 15770, 15767, 2]

// Module 15779
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(importDefault(15770));
  ({ mode, wrapperDimensions } = context);
  return jsx(require(15767) /* BaseActivityPanelSystemUIManager */.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = require("context").fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
