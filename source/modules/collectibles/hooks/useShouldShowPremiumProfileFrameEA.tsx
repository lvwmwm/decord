// Module ID: 11995
// Function ID: 11996
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8956, 9234, 2]
// Exports: default

// Module 11995 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8956) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9234);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9234) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
