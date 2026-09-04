// Module ID: 10897
// Function ID: 10898
// Name: hideLaunchPad
// Dependencies: [673, 1228, 2]
// Exports: default

// Module 10897 (hideLaunchPad)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;

const ComponentActions = ME.ComponentActions;
const result = set.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
