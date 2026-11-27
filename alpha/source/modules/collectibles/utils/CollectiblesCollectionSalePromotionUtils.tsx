// Module ID: 11282
// Function ID: 11283
// Name: CollectiblesCollectionSalePromotionUtils
// Dependencies: [11128, 7595, 11252, 2]
// Exports: getCollectionSalePromotionForCollectiblesProduct

// Module 11282 (CollectiblesCollectionSalePromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 7595 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 11128 */;
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
      const tmp4Result = tmp4(11252);
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
