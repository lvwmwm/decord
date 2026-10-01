// Module ID: 7494
// Function ID: 7495
// Dependencies: [4493, 4488, 6655, 2]
// Exports: getPriceString

// Module 7494
import PremiumUtils from "PremiumUtils" /* 4488 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup, arg1) {
  let interval;
  let intervalCount;
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = SubscriptionPlanStore.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const obj2 = PremiumUtils;
          const price = obj2.getPrice(planIdFromItems);
          const obj3 = PriceUtils;
          const formatPriceResult = obj3.formatPrice(price.amount, price.currency);
          const tmp2 = require;
          if (tmp) {
            ({ interval, intervalCount } = value);
            const tmp2Result = tmp2(6655);
            return tmp2Result.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
};
