// Module ID: 15460
// Function ID: 117951
// Name: showLaunchPad
// Dependencies: []
// Exports: default

// Module 15460 (showLaunchPad)
const ComponentActions = require(dependencyMap[0]).ComponentActions;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/launchpad/native/showLaunchPad.tsx");

export default function showLaunchPad() {
  const ComponentDispatch = require(dependencyMap[1]).ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_SHOW);
};
