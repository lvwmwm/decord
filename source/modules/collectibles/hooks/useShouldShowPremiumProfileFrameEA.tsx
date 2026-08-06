// Module ID: 12084
// Function ID: 12085
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8731, 9322, 2]
// Exports: default

// Module 12084 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8731) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9322);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
