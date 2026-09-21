// Module ID: 9638
// Function ID: 9639
// Name: ActivityPopoutUtils
// Dependencies: [2]
// Exports: shouldOpenActivityInPopoutWindow, wrapPreemptiveActivityPopout

// Module 9638 (ActivityPopoutUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(arg0, fn) {
  return fn();
};
