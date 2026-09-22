// Module ID: 17517
// Function ID: 17518
// Name: FramePanelUI
// Dependencies: [19, 21, 17518, 17519, 17522, 17491, 17516, 2]
// Exports: default

// Module 17517 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17491 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17516 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17522 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17518;
  } else {
    tmp4 = 17519;
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
