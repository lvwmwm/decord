// Module ID: 11841
// Function ID: 91777
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8252, 8704, 2]
// Exports: default

// Module 11841 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8252) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8704);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(8704) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
