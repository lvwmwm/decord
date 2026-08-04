// Module ID: 11227
// Function ID: 11228
// Name: useSafetyHubInitialized
// Dependencies: [11193, 589, 2]
// Exports: useSafetyHubInitialized

// Module 11227 (useSafetyHubInitialized)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => initialized.isInitialized());
};
