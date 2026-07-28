// Module ID: 11888
// Function ID: 91995
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8069, 8677, 2]
// Exports: default

// Module 11888 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8069) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8677);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(8677) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
