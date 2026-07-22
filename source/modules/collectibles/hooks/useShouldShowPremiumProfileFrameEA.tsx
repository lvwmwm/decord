// Module ID: 11831
// Function ID: 91728
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: []
// Exports: default

// Module 11831 (useShouldShowPremiumProfileFrameEA)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = require(dependencyMap[0]).useIsProfileFramesEnabled(location);
  importDefault(dependencyMap[1]);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(dependencyMap[1]).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
