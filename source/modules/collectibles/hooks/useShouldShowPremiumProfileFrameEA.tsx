// Module ID: 12079
// Function ID: 12080
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8730, 9322, 2]
// Exports: default

// Module 12079 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8730) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9322);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
