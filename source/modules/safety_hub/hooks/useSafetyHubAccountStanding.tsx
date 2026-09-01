// Module ID: 11456
// Function ID: 11457
// Name: useSafetyHubAccountStanding
// Dependencies: [8701, 589, 2]
// Exports: useSafetyHubAccountStanding

// Module 11456 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 589 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8701 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
