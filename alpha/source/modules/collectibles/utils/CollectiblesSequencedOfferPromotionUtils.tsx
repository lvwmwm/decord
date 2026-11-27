// Module ID: 11254
// Function ID: 11255
// Name: CollectiblesSequencedOfferPromotionUtils
// Dependencies: [11128, 7595, 11255, 6323, 11252, 2]
// Exports: getActiveSequencedOfferPromotion, getNextSequencedOfferPromotion, getSequencedOfferPromotionForCollectiblesProduct, isOrbsBackPromotion

// Module 11254 (CollectiblesSequencedOfferPromotionUtils)
import CollectiblesUtils from "CollectiblesUtils" /* 6323 */;
import StorefrontTypes from "StorefrontTypes" /* 7595 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 11255 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 11128 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let tmp3;
const CollectiblesPromoPriceUtils = tmp3(11252);
function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus && null != _false(rewardStatus);
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED && rewardStatus.rewardStatus !== tmp3(7595).StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
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
      let tmp7 = actionType === tmp3(7595).StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
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
export function getNextSequencedOfferPromotion(arg0, has) {
  let items = arg0;
  let tmp = null;
  if (arg0 == null) {
    items = [];
  }
  for (const item10010 of items) {
    let tmp2 = item10010;
    let endsAt = item10010.endsAt;
    let time;
    if (endsAt != null) {
      time = endsAt.getTime();
    }
    let tmp5 = null != time;
    let tmp4 = time;
    if (tmp5) {
      tmp5 = null != _false(tmp2);
    }
    if (tmp5) {
      tmp5 = !has.has(tmp2.id);
    }
    if (tmp5) {
      let endsAt1;
      if (tmp != null) {
        endsAt1 = tmp.endsAt;
      }
      let tmp11 = null == endsAt1;
      if (!tmp11) {
        let endsAt2 = tmp.endsAt;
        tmp11 = tmp4 < endsAt2.getTime();
      }
      tmp5 = tmp11;
    }
    if (tmp5) {
      tmp = item10010;
    }
    continue;
  }
  return tmp;
}
