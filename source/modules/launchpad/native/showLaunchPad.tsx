// Module ID: 15738
// Function ID: 15739
// Name: showLaunchPad
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 15738 (showLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
