// Module ID: 8302
// Function ID: 8303
// Dependencies: [4833, 4828, 7161, 2]
// Exports: getPriceString

// Module 8302
import PremiumUtils from "PremiumUtils" /* 4828 */;
import PriceUtils from "PriceUtils" /* 7161 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4833 */;
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
            const tmp2Result = tmp2(7161);
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
