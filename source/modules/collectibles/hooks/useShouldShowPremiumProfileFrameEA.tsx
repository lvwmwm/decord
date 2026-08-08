// Module ID: 12166
// Function ID: 12167
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8808, 9404, 2]
// Exports: default

// Module 12166 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8808) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9404);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9404) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
