// Module ID: 11882
// Function ID: 11883
// Name: useSafetyHubAccountStanding
// Dependencies: [8430, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 11882 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import closure_2 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
