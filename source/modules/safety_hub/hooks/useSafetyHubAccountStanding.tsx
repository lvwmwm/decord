// Module ID: 11355
// Function ID: 11356
// Name: useSafetyHubAccountStanding
// Dependencies: [11348, 589, 2]
// Exports: useSafetyHubAccountStanding

// Module 11355 (useSafetyHubAccountStanding)
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
