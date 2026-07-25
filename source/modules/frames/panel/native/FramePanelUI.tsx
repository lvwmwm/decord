// Module ID: 15782
// Function ID: 121737
// Name: renderActivityOrPIP
// Dependencies: [31, 33, 15783, 15787, 15790, 15756, 15781, 2]
// Exports: default

// Module 15782 (renderActivityOrPIP)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 15783;
  } else {
    tmp4 = 15787;
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const result = require("module_15783").fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const callback = React.useCallback(() => outer1_4(outer1_1(outer1_2[4]), {}), []);
  const items = [callback];
  return React.useMemo(() => {
    const obj = { renderActivityOrPIP: outer1_5, context: outer1_1(outer1_2[6]), renderActivityPanelSystemUIManager: callback };
    return outer1_4(callback(outer1_2[5]).BaseActivityPanelUI, obj);
  }, items);
};
