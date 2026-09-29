// Module ID: 17053
// Function ID: 17054
// Name: FramePanelUI
// Dependencies: [19, 21, 17054, 17055, 17058, 17027, 17052, 2]
// Exports: default

// Module 17053 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17027 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17052 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17058 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17054;
  } else {
    tmp4 = 17055;
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
