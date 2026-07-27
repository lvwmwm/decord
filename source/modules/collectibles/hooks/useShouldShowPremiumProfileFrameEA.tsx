// Module ID: 11845
// Function ID: 91825
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8031, 8633, 2]
// Exports: default

// Module 11845 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8031) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8633);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(8633) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
