// Module ID: 13996
// Function ID: 13997
// Name: useSafetyHubFetchError
// Dependencies: [11280, 589, 2]
// Exports: useSafetyHubFetchError

// Module 13996 (useSafetyHubFetchError)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetchError.getFetchError());
};
