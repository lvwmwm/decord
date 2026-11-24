// Module ID: 11108
// Function ID: 11109
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [10982, 7469, 11109, 6197, 11106, 2]
// Exports: getActiveSequencedOfferPromotion, getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 11108 (CollectiblesSequencedOfferPromotionUtils)
import CollectiblesUtils from "CollectiblesUtils" /* 6197 */;
import StorefrontTypes from "StorefrontTypes" /* 7469 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 11109 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 10982 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp3;
const CollectiblesPromoPriceUtils = tmp3(11106);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != _false(rewardStatus);
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED && rewardStatus.rewardStatus !== tmp3(7469).StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
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
      let tmp7 = actionType === tmp3(7469).StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
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
let result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesSequencedOfferPromotionUtils.tsx");

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
export function getActiveSequencedOfferPromotion(arr, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let found;
  if (arr != null) {
    found = arr.find((item) => {
      const tmp = _false(item);
      let result = null != tmp && tmp.collectionId === closure_0;
      if (result) {
        const obj = CollectiblesPromoPriceUtils;
        result = obj.isStorefrontPromotionActive(item, closure_1);
      }
      return result;
    });
  }
  if (found == null) {
    found = null;
  }
  return found;
}
