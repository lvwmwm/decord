// Module ID: 13875
// Function ID: 13876
// Name: useSafetyHubFetchError
// Dependencies: [11165, 589, 2]
// Exports: useSafetyHubFetchError

// Module 13875 (useSafetyHubFetchError)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetchError.getFetchError());
};
