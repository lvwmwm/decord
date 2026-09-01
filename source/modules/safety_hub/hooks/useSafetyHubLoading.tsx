// Module ID: 14356
// Function ID: 14357
// Name: useIsSafetyHubLoading
// Dependencies: [8701, 589, 2]
// Exports: default

// Module 14356 (useIsSafetyHubLoading)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8701 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
