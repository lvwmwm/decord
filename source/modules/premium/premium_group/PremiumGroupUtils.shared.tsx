// Module ID: 7829
// Function ID: 7830
// Name: getPriceString
// Dependencies: [3840, 3835, 5669, 2]
// Exports: getPriceString

// Module 7829 (getPriceString)
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
          const price = require(3835) /* getPremiumPlanItem */.getPrice(planIdFromItems);
          const obj2 = require(3835) /* getPremiumPlanItem */;
          const tmp2 = require;
          const formatPriceResult = require(5669) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(5669).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5669) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
