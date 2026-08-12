// Module ID: 12192
// Function ID: 12193
// Name: hideLaunchPad
// Dependencies: [676, 1231, 2]
// Exports: default

// Module 12192 (hideLaunchPad)
import { ComponentActions } from "ME";

const result = require("set").fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = require(1231) /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
