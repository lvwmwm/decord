// Module ID: 16736
// Function ID: 16737
// Name: showLaunchPad
// Dependencies: [1086, 1122, 2]
// Exports: default

// Module 16736 (showLaunchPad)
import Constants from "Constants" /* 1086 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
