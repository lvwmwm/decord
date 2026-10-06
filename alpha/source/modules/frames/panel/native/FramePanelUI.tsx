// Module ID: 17224
// Function ID: 17225
// Name: FramePanelUI
// Dependencies: [19, 21, 17225, 17226, 558, 576, 17229, 17198, 17223, 2]

// Module 17224 (FramePanelUI)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17223 */;
import FramePanelSystemUIManagerDefault from "FramePanelSystemUIManager" /* 17229 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ActivityPanelUI = tmp(17198);
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  let tmp4;
  const tmp = jsx;
  const tmp2 = importDefault;
  if ("pip" === arg1) {
    tmp4 = 17225;
  } else {
    tmp4 = 17226;
  }
  const obj = { transitionState, transitionCleanUp };
  return tmp(tmp2(tmp4), obj, arg0);
}
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return jsx(FramePanelSystemUIManagerDefault, {});
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const BaseActivityPanelUI = ActivityPanelUI.BaseActivityPanelUI;
    const tmp9 = <BaseActivityPanelUI renderActivityOrPIP={renderActivityOrPIP} context={FramePanelStateContextDefault} renderActivityPanelSystemUIManager={first} />;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const renderActivityPanelSystemUIManager = react.useCallback(() => jsx(FramePanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return react.useMemo(() => {
    const BaseActivityPanelUI = ActivityPanelUI.BaseActivityPanelUI;
    return <BaseActivityPanelUI renderActivityOrPIP={renderActivityOrPIP} context={FramePanelStateContextDefault} renderActivityPanelSystemUIManager={renderActivityPanelSystemUIManager} />;
  }, items);
});
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default tmp2;
