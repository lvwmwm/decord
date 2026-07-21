// Module ID: 10512
// Function ID: 82062
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: [284214097]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10512 (shouldOpenActivityInPopoutWindow)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(result, arg1) {
  return arg1();
};
