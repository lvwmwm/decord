// Module ID: 17088
// Function ID: 17089
// Name: FramePanelUI
// Dependencies: [19, 21, 17089, 17090, 17093, 17062, 17087, 2]
// Exports: default

// Module 17088 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17062 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17087 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17093 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17089;
  } else {
    tmp4 = 17090;
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
