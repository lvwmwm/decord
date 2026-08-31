// Module ID: 14323
// Function ID: 14324
// Name: useIsSafetyHubLoading
// Dependencies: [11416, 589, 2]
// Exports: default

// Module 14323 (useIsSafetyHubLoading)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11416 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
