// Module ID: 8159
// Function ID: 8160
// Name: getPriceString
// Dependencies: [3971, 3966, 5855, 2]
// Exports: getPriceString

// Module 8159 (getPriceString)
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
          const price = require(3966) /* getPremiumPlanItem */.getPrice(planIdFromItems);
          const obj2 = require(3966) /* getPremiumPlanItem */;
          const tmp2 = require;
          const formatPriceResult = require(5855) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(5855).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5855) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
