// Module ID: 11842
// Function ID: 11843
// Name: useSafetyHubInitialized
// Dependencies: [8360, 586, 2]
// Exports: useSafetyHubInitialized

// Module 11842 (useSafetyHubInitialized)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8360 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
