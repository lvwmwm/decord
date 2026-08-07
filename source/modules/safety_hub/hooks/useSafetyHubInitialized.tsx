// Module ID: 11248
// Function ID: 11249
// Name: useSafetyHubInitialized
// Dependencies: [11214, 589, 2]
// Exports: useSafetyHubInitialized

// Module 11248 (useSafetyHubInitialized)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => initialized.isInitialized());
};
