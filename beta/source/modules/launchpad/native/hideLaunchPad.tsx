// Module ID: 11306
// Function ID: 11307
// Name: hideLaunchPad
// Dependencies: [1078, 1114, 2]
// Exports: default

// Module 11306 (hideLaunchPad)
import Constants from "Constants" /* 1078 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
