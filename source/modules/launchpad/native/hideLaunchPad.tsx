// Module ID: 11853
// Function ID: 91832
// Name: hideLaunchPad
// Dependencies: [653, 1207, 2]
// Exports: default

// Module 11853 (hideLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
