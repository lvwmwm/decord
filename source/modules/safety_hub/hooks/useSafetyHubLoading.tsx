// Module ID: 14594
// Function ID: 14595
// Name: useIsSafetyHubLoading
// Dependencies: [8720, 586, 2]
// Exports: default

// Module 14594 (useIsSafetyHubLoading)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8720 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
