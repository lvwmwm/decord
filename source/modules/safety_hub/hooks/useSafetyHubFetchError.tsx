// Module ID: 14765
// Function ID: 14766
// Name: useSafetyHubFetchError
// Dependencies: [8430, 504, 2]
// Exports: useSafetyHubFetchError

// Module 14765 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};
