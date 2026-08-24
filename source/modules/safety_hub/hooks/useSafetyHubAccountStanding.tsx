// Module ID: 11107
// Function ID: 11108
// Name: useSafetyHubAccountStanding
// Dependencies: [11100, 589, 2]
// Exports: useSafetyHubAccountStanding

// Module 11107 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11100 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
