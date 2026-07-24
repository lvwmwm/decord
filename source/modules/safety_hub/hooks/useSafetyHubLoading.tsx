// Module ID: 13704
// Function ID: 105183
// Name: useIsSafetyHubLoading
// Dependencies: [11053, 566, 2]
// Exports: default

// Module 13704 (useIsSafetyHubLoading)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isFetching());
};
