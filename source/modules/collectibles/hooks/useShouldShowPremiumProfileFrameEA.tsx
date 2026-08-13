// Module ID: 12230
// Function ID: 12231
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8857, 9454, 2]
// Exports: default

// Module 12230 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8857) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9454);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9454) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
