// Module ID: 12331
// Function ID: 12332
// Name: useSafetyHubInitialized
// Dependencies: [7715, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12331 (useSafetyHubInitialized)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
}
