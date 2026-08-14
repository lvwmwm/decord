// Module ID: 12249
// Function ID: 12250
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8871, 9467, 2]
// Exports: default

// Module 12249 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8871) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9467);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9467) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
