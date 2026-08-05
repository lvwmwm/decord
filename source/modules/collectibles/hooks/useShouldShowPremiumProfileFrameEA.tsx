// Module ID: 12050
// Function ID: 12051
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8702, 9293, 2]
// Exports: default

// Module 12050 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8702) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9293);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9293) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
