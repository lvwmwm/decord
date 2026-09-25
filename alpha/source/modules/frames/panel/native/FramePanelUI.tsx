// Module ID: 16833
// Function ID: 16834
// Name: FramePanelUI
// Dependencies: [19, 21, 16834, 16835, 16838, 16807, 16832, 2]
// Exports: default

// Module 16833 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 16807 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16832 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 16838 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 16834;
  } else {
    tmp4 = 16835;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => jsx(ActivityPanelUI.BaseActivityPanelUI, { renderActivityOrPIP, context: FramePanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
};
