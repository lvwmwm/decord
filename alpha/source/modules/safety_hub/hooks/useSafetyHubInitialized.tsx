// Module ID: 12453
// Function ID: 12454
// Name: useSafetyHubInitialized
// Dependencies: [7835, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12453 (useSafetyHubInitialized)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
}
