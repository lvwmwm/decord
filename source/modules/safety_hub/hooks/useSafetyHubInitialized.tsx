// Module ID: 11038
// Function ID: 85836
// Name: useSafetyHubInitialized
// Dependencies: [11009, 566, 2]
// Exports: useSafetyHubInitialized

// Module 11038 (useSafetyHubInitialized)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isInitialized());
};
