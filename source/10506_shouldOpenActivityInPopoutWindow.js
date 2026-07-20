// Module ID: 10506
// Function ID: 82039
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: []
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10506 (shouldOpenActivityInPopoutWindow)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(result, arg1) {
  return arg1();
};
