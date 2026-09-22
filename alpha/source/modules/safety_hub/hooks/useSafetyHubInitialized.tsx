// Module ID: 12169
// Function ID: 12170
// Name: useSafetyHubInitialized
// Dependencies: [8706, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12169 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8706 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
