// Module ID: 10583
// Function ID: 81671
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10583 (shouldOpenActivityInPopoutWindow)
const result = require("set").fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(result, arg1) {
  return arg1();
};
