// Module ID: 17475
// Function ID: 17476
// Name: FramePanelUI
// Dependencies: [19, 21, 17476, 17477, 558, 568, 17480, 17449, 17474, 2]

// Module 17475 (FramePanelUI)
import c from "c" /* 568 */;
import ActivityPanelUI from "ActivityPanelUI" /* 17449 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17474 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17480 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17476;
  } else {
    tmp4 = 17477;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return jsx(FramePanelSystemUIManagerDefault, {});
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager: first };
    const tmp9 = jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager: first });
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
});
