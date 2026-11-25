// Module ID: 11208
// Function ID: 11209
// Name: CollectiblesPromotionDiscountUtils
// Dependencies: [7564, 2]
// Exports: getPromotionFiatPercentOff

// Module 11208 (CollectiblesPromotionDiscountUtils)
import StorefrontTypes from "StorefrontTypes" /* 7564 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountUtils.tsx");

export function getPromotionFiatPercentOff(collectiblesPromotionForProduct) {
  let discount;
  if (collectiblesPromotionForProduct != null) {
    const rewardConfig = collectiblesPromotionForProduct.rewardConfig;
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
    amount = null;
    if (true === discount.fiatEnabled) {
      amount = discount.amount;
    }
  }
  return amount;
}
