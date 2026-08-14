// Module ID: 8223
// Function ID: 8224
// Name: getPriceString
// Dependencies: [4012, 4007, 5917, 2]
// Exports: getPriceString

// Module 8223 (getPriceString)
import addSubscriptionPlan from "addSubscriptionPlan";

const require = arg1;
const result = require("formatSingleCurrencyPrice").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup) {
  let interval;
  let intervalCount;
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = addSubscriptionPlan.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = require(4007) /* getPremiumPlanItem */.getPrice(planIdFromItems);
          const obj2 = require(4007) /* getPremiumPlanItem */;
          const tmp2 = require;
          const formatPriceResult = require(5917) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(5917).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5917) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
