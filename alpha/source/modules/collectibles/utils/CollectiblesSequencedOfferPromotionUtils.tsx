// Module ID: 8845
// Function ID: 8846
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [8807, 6735, 8846, 7967, 8843, 2]
// Exports: getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 8845 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6735 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7967 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8846 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8807 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp3;
const CollectiblesPromoPriceUtils = tmp3(8843);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != _false(rewardStatus);
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED && rewardStatus.rewardStatus !== tmp3(6735).StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
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
      let tmp7 = actionType === tmp3(6735).StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
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
