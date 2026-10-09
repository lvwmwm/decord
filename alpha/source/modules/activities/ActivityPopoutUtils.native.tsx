// Module ID: 10813
// Function ID: 10814
// Name: ActivityPopoutUtils
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 10813 (ActivityPopoutUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(arg0, fn) {
  return fn();
};
