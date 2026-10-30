// Module ID: 19105
// Function ID: 19106
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 19099, 19096, 2]

// Module 19105 (FramePanelSystemUIManager)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelSystemUIManager from "ActivityPanelSystemUIManager" /* 19096 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19099 */;
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
