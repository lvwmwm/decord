// Module ID: 18062
// Function ID: 18063
// Name: showLaunchPad
// Dependencies: [1087, 1123, 2]
// Exports: default

// Module 18062 (showLaunchPad)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
