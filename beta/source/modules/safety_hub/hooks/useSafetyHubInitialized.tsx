// Module ID: 14217
// Function ID: 14218
// Name: useSafetyHubInitialized
// Dependencies: [8231, 504, 2]
// Exports: useSafetyHubInitialized

// Module 14217 (useSafetyHubInitialized)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export function useSafetyHubInitialized() {
  let initialized;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => initialized.isInitialized());
}
