// Module ID: 8965
// Function ID: 8966
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [8927, 6854, 8966, 8087, 8963, 2]
// Exports: getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 8965 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6854 */;
import CollectiblesUtils from "CollectiblesUtils" /* 8087 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8966 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8927 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp3;
const CollectiblesPromoPriceUtils = tmp3(8963);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != _false(rewardStatus);
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED && rewardStatus.rewardStatus !== tmp3(6854).StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
    if (tmp5) {
      let actionType;
      if (rewardStatus != null) {
        const rewardConfig = rewardStatus.rewardConfig;
        if (rewardConfig != null) {
          const action = rewardConfig.action;
          if (action != null) {
            actionType = action.actionType;
          }
        }
      }
      let tmp7 = actionType === tmp3(6854).StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
      if (!tmp7) {
        const tmp3Result = CollectiblesPromotionDiscountUtils;
        tmp7 = null != tmp3Result.getPromotionFiatPercentOff(rewardStatus);
      }
      tmp5 = tmp7;
    }
    tmp = tmp5;
  }
  return tmp;
}
({ doesStorefrontPromotionCoverSku: c2, getCollectiblesCollectionSequencedOffer: c3 } = StorefrontPromotionRecord);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesSequencedOfferPromotionUtils.tsx");

export function isOrbsBackPromotion(rewardConfig) {
  let actionType;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const action = rewardConfig.action;
      if (action != null) {
        actionType = action.actionType;
      }
    }
  }
  return actionType === StorefrontTypes.StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
}
export { isSequencedOfferRewardAvailable };
export function getSequencedOfferPromotionForCollectiblesProduct(skuId, includeBundles, timestamp) {
  let tmp5;
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const obj = CollectiblesUtils;
  if (!obj.isBundleProduct(skuId)) {
    let tmp7 = null;
    if (React2(includeBundles, skuId.skuId)) {
      tmp7 = null;
      const tmp3Result = CollectiblesPromoPriceUtils;
      if (tmp3Result.isStorefrontPromotionActive(includeBundles, timestamp)) {
        tmp7 = null;
        if (isSequencedOfferRewardAvailable(includeBundles)) {
          tmp7 = includeBundles;
        }
      }
    }
    tmp5 = tmp7;
  } else {
    tmp5 = null;
  }
  return tmp5;
}
