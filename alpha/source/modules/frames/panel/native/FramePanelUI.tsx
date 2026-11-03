// Module ID: 19314
// Function ID: 19315
// Name: FramePanelUI
// Dependencies: [19, 21, 19315, 19316, 19319, 19290, 19313, 2]
// Exports: default

// Module 19314 (FramePanelUI)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelUI from "ActivityPanelUI" /* 19290 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19313 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 19319 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  const tmp = jsx;
  const tmp2 = importDefault;
  if ("pip" === arg1) {
    tmp4 = 19315;
  } else {
    tmp4 = 19316;
  }
  const obj = { transitionState, transitionCleanUp };
  return tmp(tmp2(tmp4), obj, arg0);
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const renderActivityPanelSystemUIManager = react.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return react.useMemo(() => {
    const BaseActivityPanelUI = ActivityPanelUI.BaseActivityPanelUI;
    return <BaseActivityPanelUI renderActivityOrPIP={renderActivityOrPIP} context={FramePanelStateContextDefault} renderActivityPanelSystemUIManager={renderActivityPanelSystemUIManager} />;
  }, items);
};
