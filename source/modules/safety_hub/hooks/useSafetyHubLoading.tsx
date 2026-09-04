// Module ID: 14694
// Function ID: 14695
// Name: useIsSafetyHubLoading
// Dependencies: [8360, 586, 2]
// Exports: default

// Module 14694 (useIsSafetyHubLoading)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8360 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetching.isFetching());
};
