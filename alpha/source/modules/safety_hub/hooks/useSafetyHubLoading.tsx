// Module ID: 16891
// Function ID: 16892
// Name: useSafetyHubLoading
// Dependencies: [8134, 504, 2]
// Exports: default

// Module 16891 (useSafetyHubLoading)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8134 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  let fetching;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetching.isFetching());
};
