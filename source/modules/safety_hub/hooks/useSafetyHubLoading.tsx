// Module ID: 13911
// Function ID: 13912
// Name: useIsSafetyHubLoading
// Dependencies: [11199, 589, 2]
// Exports: default

// Module 13911 (useIsSafetyHubLoading)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};
