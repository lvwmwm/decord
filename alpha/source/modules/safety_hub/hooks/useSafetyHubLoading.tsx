// Module ID: 15053
// Function ID: 15054
// Name: useSafetyHubLoading
// Dependencies: [8706, 504, 2]
// Exports: default

// Module 15053 (useSafetyHubLoading)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8706 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
