// Module ID: 12099
// Function ID: 12100
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8748, 9339, 2]
// Exports: default

// Module 12099 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8748) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9339);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9339) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
