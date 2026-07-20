// Module ID: 6687
// Function ID: 51782
// Name: isForegrounded
// Dependencies: []
// Exports: isForegrounded

// Module 6687 (isForegrounded)
const AppState = require(dependencyMap[0]).AppState;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
