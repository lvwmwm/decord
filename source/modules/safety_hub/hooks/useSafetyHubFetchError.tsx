// Module ID: 13717
// Function ID: 105318
// Name: useSafetyHubFetchError
// Dependencies: [11010, 566, 2]
// Exports: useSafetyHubFetchError

// Module 13717 (useSafetyHubFetchError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getFetchError());
};
