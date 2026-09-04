// Module ID: 14690
// Function ID: 14691
// Name: useSafetyHubFetchError
// Dependencies: [8360, 586, 2]
// Exports: useSafetyHubFetchError

// Module 14690 (useSafetyHubFetchError)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8360 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
};
