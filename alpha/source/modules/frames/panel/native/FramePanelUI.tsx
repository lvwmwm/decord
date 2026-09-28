// Module ID: 16866
// Function ID: 16867
// Name: FramePanelUI
// Dependencies: [19, 21, 16867, 16868, 16871, 16840, 16865, 2]
// Exports: default

// Module 16866 (FramePanelUI)
import ActivityPanelUI from "ActivityPanelUI" /* 16840 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 16865 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 16871 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 16867;
  } else {
    tmp4 = 16868;
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
