// Module ID: 16726
// Function ID: 16727
// Name: showLaunchPad
// Dependencies: [673, 1228, 2]
// Exports: default

// Module 16726 (showLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
