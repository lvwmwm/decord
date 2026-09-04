// Module ID: 16964
// Function ID: 16965
// Name: renderActivityOrPIP
// Dependencies: [19, 21, 16965, 16966, 16969, 16938, 16963, 2]
// Exports: default

// Module 16964 (renderActivityOrPIP)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 16965;
  } else {
    tmp4 = 16966;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const callback = React.useCallback(() => callback2(callback(table[4]), {}), []);
  const items = [callback];
  return React.useMemo(() => closure_1_4(callback(closure_1_2[5]).BaseActivityPanelUI, { renderActivityOrPIP: closure_1_5, context: closure_1_1(closure_1_2[6]), renderActivityPanelSystemUIManager: callback }), items);
};
