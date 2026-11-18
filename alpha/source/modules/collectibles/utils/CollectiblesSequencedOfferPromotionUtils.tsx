// Module ID: 8872
// Function ID: 8873
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [8838, 6764, 8873, 7999, 8870, 2]
// Exports: getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 8872 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6764 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7999 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8838 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8873 */;
import size from "module_2" /* 2 */;

let tmp3;
const CollectiblesPromoPriceUtils = tmp3(8870);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != closure_2(rewardStatus);
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED && rewardStatus.rewardStatus !== tmp3(6764).StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
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
      let tmp7 = actionType === tmp3(6764).StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
      if (!tmp7) {
        const tmp3Result = CollectiblesPromotionDiscountUtils;
        tmp7 = null != tmp3Result.getPromotionPercentOff(rewardStatus);
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
export function getSequencedOfferPromotionForCollectiblesProduct(selectedProduct, appliesToAllSkus, now) {
  let tmp5;
  let timestamp = now;
  if (now === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const obj = CollectiblesUtils;
  if (!obj.isBundleProduct(selectedProduct)) {
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
      tmp8 = null;
    }
    tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
}
