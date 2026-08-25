// Module ID: 11449
// Function ID: 11450
// Name: useSafetyHubAccountStanding
// Dependencies: [11442, 589, 2]
// Exports: useSafetyHubAccountStanding

// Module 11449 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11442 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
