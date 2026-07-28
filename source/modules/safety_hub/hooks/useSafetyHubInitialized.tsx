// Module ID: 11077
// Function ID: 85964
// Name: useSafetyHubInitialized
// Dependencies: [11048, 566, 2]
// Exports: useSafetyHubInitialized

// Module 11077 (useSafetyHubInitialized)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isInitialized());
};
