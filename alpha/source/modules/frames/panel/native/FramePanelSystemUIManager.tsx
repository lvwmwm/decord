// Module ID: 19437
// Function ID: 19438
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 19431, 19428, 2]

// Module 19437 (FramePanelSystemUIManager)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 19428 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19431 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function FramePanelSystemUIManager() {
  let mode;
  let wrapperDimensions;
  const context = react.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
