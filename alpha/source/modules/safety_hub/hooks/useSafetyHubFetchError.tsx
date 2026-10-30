// Module ID: 16583
// Function ID: 16584
// Name: useSafetyHubFetchError
// Dependencies: [7986, 504, 2]
// Exports: useSafetyHubFetchError

// Module 16583 (useSafetyHubFetchError)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export function useSafetyHubFetchError() {
  let fetchError;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetchError.getFetchError());
}
