// Module ID: 13653
// Function ID: 104859
// Name: useIsSafetyHubLoading
// Dependencies: [11026, 566, 2]
// Exports: default

// Module 13653 (useIsSafetyHubLoading)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isFetching());
};
