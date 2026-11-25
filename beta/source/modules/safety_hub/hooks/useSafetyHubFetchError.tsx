// Module ID: 16043
// Function ID: 16044
// Name: useSafetyHubFetchError
// Dependencies: [7835, 504, 2]
// Exports: useSafetyHubFetchError

// Module 16043 (useSafetyHubFetchError)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export function useSafetyHubFetchError() {
  let fetchError;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetchError.getFetchError());
}
