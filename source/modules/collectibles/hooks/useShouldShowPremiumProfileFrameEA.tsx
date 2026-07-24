// Module ID: 11868
// Function ID: 92015
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8296, 8745, 2]
// Exports: default

// Module 11868 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8296) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8745);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
