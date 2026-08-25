// Module ID: 10735
// Function ID: 10736
// Name: shouldOpenActivityInPopoutWindow
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10735 (shouldOpenActivityInPopoutWindow)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(closure_2, arg1) {
  return arg1();
};
