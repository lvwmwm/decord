// Module ID: 9463
// Function ID: 9464
// Name: CollectiblesPromotionDiscountUtils
// Dependencies: [7260, 2]
// Exports: getPromotionPercentOff

// Module 9463 (CollectiblesPromotionDiscountUtils)
import StorefrontTypes from "StorefrontTypes" /* 7260 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountUtils.tsx");

export function getPromotionPercentOff(rewardConfig) {
  let discount;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      discount = rewardConfig.discount;
    }
  }
  let type;
  if (discount != null) {
    type = discount.type;
  }
  let amount = null;
  if (type === StorefrontTypes.StorefrontDiscountTypes.PERCENT) {
    amount = discount.amount;
  }
  return amount;
}
