// Module ID: 11908
// Function ID: 11909
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8090, 8697, 2]
// Exports: default

// Module 11908 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8090) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8697);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(8697) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
