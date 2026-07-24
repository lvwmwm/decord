// Module ID: 7826
// Function ID: 61796
// Name: getPriceString
// Dependencies: [3781, 3776, 5616, 2]
// Exports: getPriceString

// Module 7826 (getPriceString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("formatSingleCurrencyPrice").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(premiumSubscription, arg1) {
  let interval;
  let intervalCount;
  if (null != premiumSubscription) {
    if (premiumSubscription.hasAnyPremiumGroup) {
      const planIdFromItems = premiumSubscription.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = _isNativeReflectConstruct.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = require(3776) /* _createForOfIteratorHelperLoose */.getPrice(planIdFromItems);
          const obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
          const formatPriceResult = require(5616) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return require(5616) /* formatSingleCurrencyPrice */.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5616) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
