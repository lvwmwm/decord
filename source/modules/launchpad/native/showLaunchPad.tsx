// Module ID: 16077
// Function ID: 16078
// Name: showLaunchPad
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 16077 (showLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
