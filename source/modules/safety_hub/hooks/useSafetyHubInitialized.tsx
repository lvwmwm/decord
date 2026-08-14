// Module ID: 11382
// Function ID: 11383
// Name: useSafetyHubInitialized
// Dependencies: [11348, 589, 2]
// Exports: useSafetyHubInitialized

// Module 11382 (useSafetyHubInitialized)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => initialized.isInitialized());
};
