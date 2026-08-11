// Module ID: 12171
// Function ID: 12172
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8814, 9410, 2]
// Exports: default

// Module 12171 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8814) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(9410);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9410) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
