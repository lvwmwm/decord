// Module ID: 14005
// Function ID: 14006
// Name: useIsSafetyHubLoading
// Dependencies: [11286, 589, 2]
// Exports: default

// Module 14005 (useIsSafetyHubLoading)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};
