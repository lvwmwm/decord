// Module ID: 13761
// Function ID: 105491
// Name: useSafetyHubFetchError
// Dependencies: [11048, 566, 2]
// Exports: useSafetyHubFetchError

// Module 13761 (useSafetyHubFetchError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getFetchError());
};
