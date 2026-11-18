// Module ID: 9466
// Function ID: 9467
// Name: useTargetedOfferPromotion
// Dependencies: [1072, 8868, 6764, 8877, 8869, 2]
// Exports: useEligibleCollectiblesTargetedOfferPromotion, useIsFiatExclusiveTargetedOfferPromotion, useTargetedOfferPromotionForCollectiblesProduct, useTargetedOfferPromotionPurchaseCtaText

// Module 9466 (useTargetedOfferPromotion)
import Constants from "Constants" /* 1072 */;
import StorefrontTypes from "StorefrontTypes" /* 6764 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 8868 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 8869 */;
import size from "module_2" /* 2 */;

let tmp4;
const CollectiblesTargetedOfferPromotionUtils = tmp4(8877);
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
export function useTargetedOfferPromotionForCollectiblesProduct(product) {
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
  const collectiblesPricingPromotionForProduct = tmp4Result3.useCollectiblesPricingPromotionForProduct(product);
  const tmp4Result4 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result4.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5, collectiblesPricingPromotionForProduct);
}
export function useTargetedOfferPromotionPurchaseCtaText(isFirstParty) {
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
  const collectiblesPricingPromotionForProduct = tmp4Result4.useCollectiblesPricingPromotionForProduct(isFirstParty);
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = tmp4Result5.getTargetedOfferPromotionForCollectiblesProduct(isFirstParty, tmp5, collectiblesPricingPromotionForProduct);
  const tmp4Result6 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result6.getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct);
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
