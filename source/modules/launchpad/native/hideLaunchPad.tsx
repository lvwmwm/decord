// Module ID: 11799
// Function ID: 91571
// Name: hideLaunchPad
// Dependencies: []
// Exports: default

// Module 11799 (hideLaunchPad)
const ComponentActions = require(dependencyMap[0]).ComponentActions;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/launchpad/native/hideLaunchPad.tsx");

export default function hideLaunchPad() {
  const ComponentDispatch = require(dependencyMap[1]).ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.LAUNCH_PAD_HIDE);
};
