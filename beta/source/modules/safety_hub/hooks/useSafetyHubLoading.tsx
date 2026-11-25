// Module ID: 16049
// Function ID: 16050
// Name: useSafetyHubLoading
// Dependencies: [7835, 504, 2]
// Exports: default

// Module 16049 (useSafetyHubLoading)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  let fetching;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetching.isFetching());
};
