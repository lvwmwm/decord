// Module ID: 11421
// Function ID: 11422
// Name: useSafetyHubInitialized
// Dependencies: [11387, 589, 2]
// Exports: useSafetyHubInitialized

// Module 11421 (useSafetyHubInitialized)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11387 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
