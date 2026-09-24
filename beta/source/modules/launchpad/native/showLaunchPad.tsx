// Module ID: 17394
// Function ID: 17395
// Name: showLaunchPad
// Dependencies: [1078, 1114, 2]
// Exports: default

// Module 17394 (showLaunchPad)
import Constants from "Constants" /* 1078 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
