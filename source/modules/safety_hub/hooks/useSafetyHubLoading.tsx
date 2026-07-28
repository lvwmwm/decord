// Module ID: 13760
// Function ID: 105488
// Name: useIsSafetyHubLoading
// Dependencies: [11048, 566, 2]
// Exports: default

// Module 13760 (useIsSafetyHubLoading)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isFetching());
};
