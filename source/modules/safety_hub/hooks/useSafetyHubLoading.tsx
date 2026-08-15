// Module ID: 14107
// Function ID: 14108
// Name: useIsSafetyHubLoading
// Dependencies: [11061, 589, 2]
// Exports: default

// Module 14107 (useIsSafetyHubLoading)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};
