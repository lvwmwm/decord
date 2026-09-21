// Module ID: 15046
// Function ID: 15047
// Name: useSafetyHubLoading
// Dependencies: [8702, 504, 2]
// Exports: default

// Module 15046 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8702 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
