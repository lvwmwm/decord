// Module ID: 19460
// Function ID: 19461
// Name: FramePanelContainer
// Dependencies: [19, 6984, 6985, 21, 504, 12044, 19461, 19463, 2]

// Module 19460 (FramePanelContainer)
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import WakeLockDefault from "WakeLock" /* 12044 */;
import FramePanelControllerDefault from "FramePanelController" /* 19461 */;
import FramePanelUIDefault from "FramePanelUI" /* 19463 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6984 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const isLaunched = FramesConstants.isLaunched;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(function FramePanelContainer() {
  let items1;
  let mainFrame;
  const items = [FramesStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: items1 };
    items1 = [hasOwnProperty(WakeLockDefault, { wakeLockKey: "FrameActivities" }), ];
    const obj3 = { children: hasOwnProperty(FramePanelUIDefault, {}) };
    const tmp7 = FramePanelControllerDefault;
    items1[1] = hasOwnProperty(tmp7, obj3);
    tmp2 = metroImportDefault(metroRequire, obj2);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
