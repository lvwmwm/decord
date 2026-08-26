// Module ID: 11548
// Function ID: 11549
// Name: useSafetyHubInitialized
// Dependencies: [11514, 589, 2]
// Exports: useSafetyHubInitialized

// Module 11548 (useSafetyHubInitialized)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11514 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
