// Module ID: 16955
// Function ID: 16956
// Name: useSafetyHubFetchError
// Dependencies: [8064, 504, 2]
// Exports: useSafetyHubFetchError

// Module 16955 (useSafetyHubFetchError)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export function useSafetyHubFetchError() {
  let fetchError;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetchError.getFetchError());
}
