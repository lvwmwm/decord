// Module ID: 16832
// Function ID: 16833
// Name: FramePanelContainer
// Dependencies: [19, 8496, 8497, 21, 558, 576, 504, 16833, 16835, 2]

// Module 16832 (FramePanelContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import FramePanelControllerDefault from "FramePanelController" /* 16833 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 8496 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const isLaunched = FramesConstants.isLaunched;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let mainFrame;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function s() {
      return isLaunched(mainFrame.getMainFrame());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let tmp9 = null;
    if (stateFromStores) {
      FramePanelControllerDefault;
      tmp9 = <tmp12>{null}</tmp12>;
    }
    cResult[2] = stateFromStores;
    cResult[3] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let mainFrame;
  const items = [FramesStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    FramePanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
