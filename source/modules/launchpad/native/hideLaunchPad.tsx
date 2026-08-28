// Module ID: 10641
// Function ID: 10642
// Name: hideLaunchPad
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 10641 (hideLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
