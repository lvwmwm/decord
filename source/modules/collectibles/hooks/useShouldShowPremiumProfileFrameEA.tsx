// Module ID: 11830
// Function ID: 91702
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: []
// Exports: default

// Module 11830 (useShouldShowPremiumProfileFrameEA)
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
