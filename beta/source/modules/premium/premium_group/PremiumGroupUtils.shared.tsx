// Module ID: 8589
// Function ID: 8590
// Dependencies: [2175, 2171, 7477, 2]
// Exports: getPriceString

// Module 8589
import PremiumUtils from "PremiumUtils" /* 2171 */;
import PriceUtils from "PriceUtils" /* 7477 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2175 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export function getPriceString(hasAnyPremiumGroup, arg1) {
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
            const tmp2Result = tmp2(7477);
            return tmp2Result.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
}
