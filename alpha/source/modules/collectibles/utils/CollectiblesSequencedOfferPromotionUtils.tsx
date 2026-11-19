// Module ID: 8845
// Function ID: 8846
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [8807, 6735, 8846, 7968, 8843, 2]
// Exports: getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 8845 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6735 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7968 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8807 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8846 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromoPriceUtils = tmp3(8843);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != closure_2(rewardStatus);
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
let closure_2 = StorefrontPromotionRecord.getCollectiblesCollectionSequencedOffer;
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
export function getSequencedOfferPromotionForCollectiblesProduct(skuId, appliesToAllSkus, timestamp) {
  let tmp5;
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const obj = CollectiblesUtils;
  if (!obj.isBundleProduct(skuId)) {
    let tmp8;
    if (appliesToAllSkus.appliesToAllSkus) {
      tmp8 = null;
      const tmp3Result = CollectiblesPromoPriceUtils;
      if (tmp3Result.isStorefrontPromotionActive(appliesToAllSkus, timestamp)) {
        tmp8 = null;
        if (isSequencedOfferRewardAvailable(appliesToAllSkus)) {
          tmp8 = appliesToAllSkus;
        }
      }
    } else {
      const skuIds = appliesToAllSkus.skuIds;
      let hasItem;
      if (skuIds != null) {
        hasItem = skuIds.includes(skuId.skuId);
      }
      tmp8 = null;
    }
    tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
}
