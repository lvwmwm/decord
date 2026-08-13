// Module ID: 14071
// Function ID: 14072
// Name: useIsSafetyHubLoading
// Dependencies: [11331, 589, 2]
// Exports: default

// Module 14071 (useIsSafetyHubLoading)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};
