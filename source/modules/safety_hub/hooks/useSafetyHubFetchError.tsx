// Module ID: 13705
// Function ID: 105186
// Name: useSafetyHubFetchError
// Dependencies: [11053, 566, 2]
// Exports: useSafetyHubFetchError

// Module 13705 (useSafetyHubFetchError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getFetchError());
};
