// Module ID: 4531
// Function ID: 39734
// Name: setAccessibilityFocus
// Dependencies: []
// Exports: setAccessibilityFocus

// Module 4531 (setAccessibilityFocus)
const _module = require(dependencyMap[0]);
({ AccessibilityInfo: closure_3, findNodeHandle: closure_4 } = _module);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("setAccessibilityFocus");
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  let delay;
  let ref;
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let require;
  if (null != ref) {
    const tmp2 = callback(ref.current);
    require = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (obj.isFabric()) {
          const result = accessibilityFocus.setAccessibilityFocus(tmp2);
        } else {
          const result1 = callback(closure_2[2]).setAccessibilityFocus(tmp2);
          result1.catch((arg0) => closure_5.warn("Failed with reason:", arg0));
          const obj2 = callback(closure_2[2]);
        }
      }, delay);
    }
  }
};
