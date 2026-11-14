// Module ID: 11683
// Function ID: 11684
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: [1390, 11664, 2]
// Exports: default

// Module 11683 (useShouldShowGiftingPromotionDeco)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import NativeGiftContext from "NativeGiftContext" /* 11664 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default function useShouldShowGiftingPromotionDeco(arg0) {
  let tmp4;
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const claimableRewards = nativeGiftContext.claimableRewards;
  if (null != arg0) {
    tmp4 = arg0 === PremiumTypes.TIER_2;
  } else {
    tmp4 = tmp2 === PremiumTypes.TIER_2;
  }
  return null != claimableRewards && claimableRewards.length > 0 && tmp4;
};
