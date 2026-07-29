// Module ID: 11912
// Function ID: 11913
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8093, 8701, 2]
// Exports: default

// Module 11912 (useShouldShowPremiumProfileFrameEA)
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(8093) /* apexExperiment */.useIsProfileFramesEnabled(location);
  importDefault(8701);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(8701) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
