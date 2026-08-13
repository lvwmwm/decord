// Module ID: 14062
// Function ID: 14063
// Name: useIsSafetyHubLoading
// Dependencies: [11332, 589, 2]
// Exports: default

// Module 14062 (useIsSafetyHubLoading)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubLoading.tsx");

export default function useIsSafetyHubLoading() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => fetching.isFetching());
};
