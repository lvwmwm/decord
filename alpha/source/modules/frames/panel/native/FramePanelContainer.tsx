// Module ID: 17654
// Function ID: 17655
// Name: FramePanelContainer
// Dependencies: [19, 10772, 10767, 21, 558, 576, 504, 10918, 17655, 17657, 2]

// Module 17654 (FramePanelContainer)
import react2 from "react" /* 576 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import WakeLockDefault from "WakeLock" /* 10918 */;
import FramePanelControllerDefault from "FramePanelController" /* 17655 */;
import FramePanelUIDefault from "FramePanelUI" /* 17657 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 10772 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const get_initialized = tmp(504);
const isLaunched = FramesConstants.isLaunched;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const FrameActivities = "FrameActivities";
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FramePanelContainer() {
  let items1;
  let mainFrame;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function o() {
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
      const obj2 = { children: items1 };
      const obj3 = { wakeLockKey: FrameActivities };
      items1 = [hasOwnProperty(WakeLockDefault, obj3), ];
      const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
      const tmp15 = FramePanelControllerDefault;
      items1[1] = hasOwnProperty(tmp15, obj4);
      tmp9 = metroImportDefault(metroRequire, obj2);
    }
    cResult[2] = stateFromStores;
    cResult[3] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function FramePanelContainer() {
  let items1;
  let mainFrame;
  const items = [FramesStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: items1 };
    const obj3 = { wakeLockKey: FrameActivities };
    items1 = [hasOwnProperty(WakeLockDefault, obj3), ];
    const obj4 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
    const tmp8 = FramePanelControllerDefault;
    items1[1] = hasOwnProperty(tmp8, obj4);
    tmp2 = metroImportDefault(metroRequire, obj2);
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
