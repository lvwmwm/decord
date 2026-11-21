// Module ID: 13874
// Function ID: 13875
// Name: hideLaunchPad
// Dependencies: [1071, 1107, 2]
// Exports: default

// Module 13874 (hideLaunchPad)
import Constants from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
