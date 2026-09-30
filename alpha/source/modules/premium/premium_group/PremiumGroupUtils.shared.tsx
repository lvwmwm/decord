// Module ID: 7689
// Function ID: 7690
// Dependencies: [4523, 4518, 6851, 2]
// Exports: getPriceString

// Module 7689
import PremiumUtils from "PremiumUtils" /* 4518 */;
import PriceUtils from "PriceUtils" /* 6851 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4523 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup, arg1) {
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        value = SubscriptionPlanStore.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = PremiumUtils.getPrice(planIdFromItems);
          const tmp2 = require;
          const formatPriceResult = PriceUtils.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(6851).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
};
