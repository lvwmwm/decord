// Module ID: 8971
// Function ID: 8972
// Name: CollectiblesCollectionSalePromotionUtils
// Dependencies: [8927, 6854, 8963, 2]
// Exports: getCollectionSalePromotionForCollectiblesProduct

// Module 8971 (CollectiblesCollectionSalePromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6854 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8927 */;
import size from "module_2" /* 2 */;

let closure_2 = StorefrontPromotionRecord.getCollectiblesCollectionSale;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesCollectionSalePromotionUtils.tsx");

export function getCollectionSalePromotionForCollectiblesProduct(skuId, rewardStatus, timestamp) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != closure_2(rewardStatus)) {
    tmp3 = null;
    const tmp4 = require;
    if (rewardStatus.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
      tmp3 = null;
      const tmp4Result = tmp4(8963);
      if (tmp4Result.isStorefrontPromotionActive(rewardStatus, timestamp)) {
        const skuIds = rewardStatus.skuIds;
        let hasItem;
        if (skuIds != null) {
          hasItem = skuIds.includes(skuId.skuId);
        }
        tmp3 = null;
        if (true === hasItem) {
          tmp3 = rewardStatus;
        }
      }
    }
  }
  return tmp3;
}
