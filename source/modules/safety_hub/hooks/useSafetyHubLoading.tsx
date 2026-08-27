// Module ID: 14305
// Function ID: 14306
// Name: useIsSafetyHubLoading
// Dependencies: [11368, 589, 2]
// Exports: default

// Module 14305 (useIsSafetyHubLoading)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11368 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
