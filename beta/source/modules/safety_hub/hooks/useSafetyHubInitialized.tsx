// Module ID: 12165
// Function ID: 12166
// Name: useSafetyHubInitialized
// Dependencies: [8702, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12165 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8702 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
