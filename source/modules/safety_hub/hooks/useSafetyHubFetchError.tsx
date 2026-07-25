// Module ID: 13716
// Function ID: 105313
// Name: useSafetyHubFetchError
// Dependencies: [11009, 566, 2]
// Exports: useSafetyHubFetchError

// Module 13716 (useSafetyHubFetchError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getFetchError());
};
