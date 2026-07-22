// Module ID: 15607
// Function ID: 119073
// Name: renderActivityOrPIP
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15607 (renderActivityOrPIP)
import __exportStarResult1 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = dependencyMap[2];
  } else {
    tmp4 = dependencyMap[3];
  }
  return jsx(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/frames/panel/native/FramePanelUI.tsx");

export default function FramePanelUI() {
  const callback = React.useCallback(() => callback2(callback(closure_2[4]), {}), []);
  const arg1 = callback;
  const items = [callback];
  return React.useMemo(() => {
    const obj = { renderActivityOrPIP: closure_5, context: callback(closure_2[6]), renderActivityPanelSystemUIManager: callback };
    return callback2(callback(closure_2[5]).BaseActivityPanelUI, obj);
  }, items);
};
