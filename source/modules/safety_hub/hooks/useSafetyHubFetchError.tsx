// Module ID: 13654
// Function ID: 104862
// Name: useSafetyHubFetchError
// Dependencies: [11026, 566, 2]
// Exports: useSafetyHubFetchError

// Module 13654 (useSafetyHubFetchError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getFetchError());
};
