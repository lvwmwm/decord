// Module ID: 10094
// Function ID: 10095
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: [1391, 558, 10040, 2]

// Module 10094 (useShouldShowGiftingPromotionDeco)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import NativeGiftContext from "NativeGiftContext" /* 10040 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowGiftingPromotionDeco(arg0) {
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
}) : (function useShouldShowGiftingPromotionDeco(arg0) {
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
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default tmp2;
