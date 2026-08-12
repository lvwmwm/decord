// Module ID: 12228
// Function ID: 12229
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8853, 9450, 2]
// Exports: default

// Module 12228 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8853) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9450);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9450) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
