// Module ID: 17483
// Function ID: 17484
// Name: FramePanelContainer
// Dependencies: [19, 9343, 9344, 21, 558, 568, 504, 17484, 17486, 2]

// Module 17483 (FramePanelContainer)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FramePanelControllerDefault from "FramePanelController" /* 17484 */;
import FramePanelUIDefault from "FramePanelUI" /* 17486 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9343 */;

require = fn;
const isLaunched = fn(9344).isLaunched;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let tmp9 = null;
    if (stateFromStores) {
      const obj2 = { children: jsx(FramePanelUIDefault, {}) };
      tmp9 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
    }
    cResult[2] = stateFromStores;
    cResult[3] = tmp9;
    let tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  const items = [FramesStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => isLaunched(mainFrame.getMainFrame()))) {
    const obj2 = { children: jsx(FramePanelUIDefault, {}) };
    tmp2 = jsx(FramePanelControllerDefault, { children: jsx(FramePanelUIDefault, {}) });
  }
  return tmp2;
}));
