// Module ID: 11247
// Function ID: 11248
// Name: useTargetedOfferPromotion
// Dependencies: [1071, 11248, 7595, 11249, 11250, 2]
// Exports: useEligibleCollectiblesTargetedOfferPromotion, useIsFiatExclusiveTargetedOfferPromotion, useTargetedOfferPromotionForCollectiblesProduct

// Module 11247 (useTargetedOfferPromotion)
import Constants from "Constants" /* 1071 */;
import StorefrontTypes from "StorefrontTypes" /* 7595 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 11248 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11250 */;
import size from "module_2" /* 2 */;

let tmp4;
const CollectiblesTargetedOfferPromotionUtils = tmp4(11249);
let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTargetedOfferPromotion.tsx");

export function useEligibleCollectiblesTargetedOfferPromotion() {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    const tmp4Result = CollectiblesTargetedOfferPromotionUtils;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
  }
  return tmp5;
}
export function useTargetedOfferPromotionForCollectiblesProduct(skuId) {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    const tmp4Result = CollectiblesTargetedOfferPromotionUtils;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
  }
  const tmp4Result3 = CollectiblesPricingPromotionUtils;
  const collectiblesPricingPromotionForProduct = tmp4Result3.useCollectiblesPricingPromotionForProduct(skuId);
  const tmp4Result4 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result4.getTargetedOfferPromotionForCollectiblesProduct(skuId, tmp5, collectiblesPricingPromotionForProduct);
}
export function useIsFiatExclusiveTargetedOfferPromotion(product) {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    const tmp4Result = CollectiblesTargetedOfferPromotionUtils;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
  }
  const tmp4Result4 = CollectiblesPricingPromotionUtils;
  const collectiblesPricingPromotionForProduct = tmp4Result4.useCollectiblesPricingPromotionForProduct(product);
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = tmp4Result5.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5, collectiblesPricingPromotionForProduct);
  const tmp4Result6 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result6.hasFiatExclusiveTargetedOfferPromotion(targetedOfferPromotionForCollectiblesProduct);
}
