// Module ID: 15047
// Function ID: 15048
// Name: useSafetyHubFetchError
// Dependencies: [8706, 504, 2]
// Exports: useSafetyHubFetchError

// Module 15047 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8706 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};
