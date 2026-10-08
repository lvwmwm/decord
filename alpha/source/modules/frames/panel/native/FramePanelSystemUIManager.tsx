// Module ID: 17510
// Function ID: 17511
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 558, 576, 17504, 17501, 2]

// Module 17510 (FramePanelSystemUIManager)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17504 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ActivityPanelSystemUIManager = tmp(17501);
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FramePanelSystemUIManager() {
  let mode;
  let wrapperDimensions;
  const obj = react2;
  const cResult = obj.c(3);
  const context = react.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  if (cResult[0] === mode) {
    let tmp5;
    if (cResult[1] === wrapperDimensions.isWindowLandscape) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
  cResult[0] = mode;
  cResult[1] = wrapperDimensions.isWindowLandscape;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function FramePanelSystemUIManager() {
  let mode;
  let wrapperDimensions;
  const context = react.useContext(FramePanelStateContextDefault);
  ({ mode, wrapperDimensions } = context);
  return jsx(ActivityPanelSystemUIManager.BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
