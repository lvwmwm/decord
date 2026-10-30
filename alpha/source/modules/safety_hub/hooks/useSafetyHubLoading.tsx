// Module ID: 16589
// Function ID: 16590
// Name: useSafetyHubLoading
// Dependencies: [7986, 504, 2]
// Exports: default

// Module 16589 (useSafetyHubLoading)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  let fetching;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => fetching.isFetching());
};
