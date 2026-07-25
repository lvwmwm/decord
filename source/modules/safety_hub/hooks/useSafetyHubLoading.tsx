// Module ID: 13715
// Function ID: 105310
// Name: useIsSafetyHubLoading
// Dependencies: [11009, 566, 2]
// Exports: default

// Module 13715 (useIsSafetyHubLoading)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isFetching());
};
