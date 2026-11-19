// Module ID: 12361
// Function ID: 12362
// Name: useSafetyHubInitialized
// Dependencies: [7716, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12361 (useSafetyHubInitialized)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
}
