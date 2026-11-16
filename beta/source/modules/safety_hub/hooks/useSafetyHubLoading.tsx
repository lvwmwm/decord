// Module ID: 17269
// Function ID: 17270
// Name: useSafetyHubLoading
// Dependencies: [8231, 504, 2]
// Exports: default

// Module 17269 (useSafetyHubLoading)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  let fetching;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetching.isFetching());
};
