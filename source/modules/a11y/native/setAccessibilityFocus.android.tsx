// Module ID: 4539
// Function ID: 39831
// Name: setAccessibilityFocus
// Dependencies: [27, 3, 4529, 3994, 2]
// Exports: setAccessibilityFocus

// Module 4539 (setAccessibilityFocus)
import get_ActivityIndicator from "get ActivityIndicator";
import importDefaultResult from "isFabric";

let closure_3;
let closure_4;
({ AccessibilityInfo: closure_3, findNodeHandle: closure_4 } = get_ActivityIndicator);
importDefaultResult = new importDefaultResult("setAccessibilityFocus");
let result = require("enforcing").fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  let delay;
  let ref;
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let c0;
  if (null != ref) {
    const tmp2 = callback(ref.current);
    c0 = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (obj.isFabric()) {
          const result = outer1_3.setAccessibilityFocus(_undefined);
        } else {
          const result1 = outer1_1(outer1_2[2]).setAccessibilityFocus(_undefined);
          result1.catch((arg0) => outer2_5.warn("Failed with reason:", arg0));
          const obj2 = outer1_1(outer1_2[2]);
        }
      }, delay);
    }
  }
};
