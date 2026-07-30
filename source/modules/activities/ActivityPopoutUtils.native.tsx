// Module ID: 10603
// Function ID: 10604
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10603 (shouldOpenActivityInPopoutWindow)
const result = require("set").fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(closure_2, arg1) {
  return arg1();
};
