// Module ID: 11814
// Function ID: 11815
// Name: useSafetyHubAccountStanding
// Dependencies: [8360, 586, 2]
// Exports: useSafetyHubAccountStanding

// Module 11814 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8360 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
