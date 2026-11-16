// Module ID: 10773
// Function ID: 10774
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: [1387, 10713, 2]
// Exports: default

// Module 10773 (useShouldShowGiftingPromotionDeco)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import NativeGiftContext from "NativeGiftContext" /* 10713 */;
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
