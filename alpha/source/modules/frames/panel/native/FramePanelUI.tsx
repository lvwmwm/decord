// Module ID: 17110
// Function ID: 17111
// Name: FramePanelUI
// Dependencies: [19, 21, 17111, 17112, 17115, 17084, 17109, 2]
// Exports: default

// Module 17110 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 17084 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17109 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17115 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17111;
  } else {
    tmp4 = 17112;
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
