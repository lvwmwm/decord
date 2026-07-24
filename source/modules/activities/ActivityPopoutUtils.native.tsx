// Module ID: 10552
// Function ID: 82328
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10552 (shouldOpenActivityInPopoutWindow)
const result = require("set").fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(result, arg1) {
  return arg1();
};
