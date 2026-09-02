// Module ID: 11679
// Function ID: 11680
// Name: useSafetyHubAccountStanding
// Dependencies: [8716, 586, 2]
// Exports: useSafetyHubAccountStanding

// Module 11679 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8716 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
