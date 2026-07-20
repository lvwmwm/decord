// Module ID: 471
// Function ID: 6156
// Name: subscribe
// Dependencies: []
// Exports: default

// Module 471 (subscribe)
const useSyncExternalStore = require(dependencyMap[0]).useSyncExternalStore;
function subscribe(handleStoreChange) {
  const callback = callback(dependencyMap[1]).addChangeListener(handleStoreChange);
  return () => closure_0.remove();
}

export default function useColorScheme() {
  return useSyncExternalStore(subscribe, require(dependencyMap[1]).getColorScheme);
};
