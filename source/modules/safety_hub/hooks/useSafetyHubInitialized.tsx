// Module ID: 11910
// Function ID: 11911
// Name: useSafetyHubInitialized
// Dependencies: [8430, 504, 2]
// Exports: useSafetyHubInitialized

// Module 11910 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
