// Module ID: 11823
// Function ID: 91679
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: []
// Exports: default

// Module 11823 (useShouldShowPremiumProfileFrameEA)
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
