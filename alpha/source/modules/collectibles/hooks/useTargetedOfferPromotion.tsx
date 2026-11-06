// Module ID: 9655
// Function ID: 9656
// Name: useTargetedOfferPromotion
// Dependencies: [1072, 9656, 7498, 9657, 2]
// Exports: useEligibleCollectiblesTargetedOfferPromotion, useIsFiatExclusiveTargetedOfferPromotion, useTargetedOfferPromotionForCollectiblesProduct, useTargetedOfferPromotionPurchaseCtaText

// Module 9655 (useTargetedOfferPromotion)
import Constants from "Constants" /* 1072 */;
import StorefrontTypes from "StorefrontTypes" /* 7498 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 9656 */;
import size from "module_2" /* 2 */;

let tmp4;
const CollectiblesTargetedOfferPromotionUtils = tmp4(9657);
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
  const tmp4Result2 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result2.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5);
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
  const tmp4Result3 = CollectiblesTargetedOfferPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = tmp4Result3.getTargetedOfferPromotionForCollectiblesProduct(isFirstParty, tmp5);
  const tmp4Result4 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result4.getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct);
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
  const tmp4Result3 = CollectiblesTargetedOfferPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = tmp4Result3.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5);
  const tmp4Result4 = CollectiblesTargetedOfferPromotionUtils;
  return tmp4Result4.hasFiatExclusiveTargetedOfferPromotion(targetedOfferPromotionForCollectiblesProduct);
}
