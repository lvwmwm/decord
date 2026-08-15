// Module ID: 14108
// Function ID: 14109
// Name: useSafetyHubFetchError
// Dependencies: [11061, 589, 2]
// Exports: useSafetyHubFetchError

// Module 14108 (useSafetyHubFetchError)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = function useSafetyHubFetchError() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetchError.getFetchError());
};
