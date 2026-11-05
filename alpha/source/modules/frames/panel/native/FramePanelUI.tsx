// Module ID: 19463
// Function ID: 19464
// Name: FramePanelUI
// Dependencies: [19, 21, 19464, 19465, 19468, 19439, 19462, 2]
// Exports: default

// Module 19463 (FramePanelUI)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelUI from "ActivityPanelUI" /* 19439 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19462 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 19468 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  const tmp = jsx;
  const tmp2 = importDefault;
  if ("pip" === arg1) {
    tmp4 = 19464;
  } else {
    tmp4 = 19465;
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
