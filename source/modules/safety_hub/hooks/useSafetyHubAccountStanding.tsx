// Module ID: 11684
// Function ID: 11685
// Name: useSafetyHubAccountStanding
// Dependencies: [8720, 586, 2]
// Exports: useSafetyHubAccountStanding

// Module 11684 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8720 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
