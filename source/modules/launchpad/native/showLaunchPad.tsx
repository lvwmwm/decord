// Module ID: 15642
// Function ID: 120553
// Name: showLaunchPad
// Dependencies: [653, 1207, 2]
// Exports: default

// Module 15642 (showLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
