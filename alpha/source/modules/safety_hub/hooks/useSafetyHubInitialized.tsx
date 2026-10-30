// Module ID: 13299
// Function ID: 13300
// Name: useSafetyHubInitialized
// Dependencies: [7986, 504, 2]
// Exports: useSafetyHubInitialized

// Module 13299 (useSafetyHubInitialized)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
}
