// Module ID: 14595
// Function ID: 14596
// Name: useSafetyHubFetchError
// Dependencies: [8720, 586, 2]
// Exports: useSafetyHubFetchError

// Module 14595 (useSafetyHubFetchError)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8720 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};
