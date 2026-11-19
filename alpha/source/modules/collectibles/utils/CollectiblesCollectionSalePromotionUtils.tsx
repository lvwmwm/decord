// Module ID: 8851
// Function ID: 8852
// Name: CollectiblesCollectionSalePromotionUtils
// Dependencies: [8807, 6735, 8843, 2]
// Exports: getCollectionSalePromotionForCollectiblesProduct

// Module 8851 (CollectiblesCollectionSalePromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6735 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8807 */;
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
      const tmp4Result = tmp4(8843);
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
