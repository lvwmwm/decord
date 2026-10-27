// Module ID: 18181
// Function ID: 18182
// Name: FramePanelSystemUIManager
// Dependencies: [19, 21, 558, 576, 18175, 18172, 2]

// Module 18181 (FramePanelSystemUIManager)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 18175 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ActivityPanelSystemUIManager = tmp(18172);
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
