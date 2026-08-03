// Module ID: 11988
// Function ID: 11989
// Name: hideLaunchPad
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 11988 (hideLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
