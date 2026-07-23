// Module ID: 471
// Function ID: 6156
// Name: subscribe
// Dependencies: [31, 434]
// Exports: default

// Module 471 (subscribe)
import { useSyncExternalStore } from "result";

function subscribe(handleStoreChange) {
  _require = _require(434).addChangeListener(handleStoreChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, require(434) /* getState */.getColorScheme);
};
