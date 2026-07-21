// Module ID: 9682
// Function ID: 75358
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: []
// Exports: default

// Module 9682 (useShouldShowGiftingPromotionDeco)
const PremiumTypes = require(dependencyMap[0]).PremiumTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default function useShouldShowGiftingPromotionDeco(arg0) {
  const nativeGiftContext = require(dependencyMap[1]).useNativeGiftContext();
  const claimableRewards = nativeGiftContext.claimableRewards;
  if (null != arg0) {
    let tmp4 = arg0 === PremiumTypes.TIER_2;
  } else {
    tmp4 = tmp2 === PremiumTypes.TIER_2;
  }
  let tmp6 = null != claimableRewards;
  if (tmp6) {
    tmp6 = claimableRewards.length > 0;
  }
  if (tmp6) {
    tmp6 = tmp4;
  }
  return tmp6;
};
