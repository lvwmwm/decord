// Module ID: 494
// Function ID: 495
// Name: subscribe
// Dependencies: [19, 453]
// Exports: default

// Module 494 (subscribe)
import { useSyncExternalStore } from "noop";

function subscribe(onChange) {
  _require = _require(453).addChangeListener(onChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, require(453) /* getColorScheme */.getColorScheme);
};
