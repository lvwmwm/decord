// Module ID: 17510
// Function ID: 17511
// Name: FramePanelUI
// Dependencies: [19, 21, 17511, 17512, 17515, 17484, 17509, 2]
// Exports: default

// Module 17510 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17484 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17509 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17515 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17511;
  } else {
    tmp4 = 17512;
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
