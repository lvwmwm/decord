// Module ID: 494
// Function ID: 495
// Name: subscribe
// Dependencies: [19, 453]
// Exports: default

// Module 494 (subscribe)
import noop from "noop" /* 19 */;
import getColorScheme from "getColorScheme" /* 453 */;

const useSyncExternalStore = noop.useSyncExternalStore;
function subscribe(onChange) {
  _require = _require(453).addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, getColorScheme.getColorScheme);
};
