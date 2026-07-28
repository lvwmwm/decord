// Module ID: 7809
// Function ID: 61859
// Name: getPriceString
// Dependencies: [3816, 3811, 5651, 2]
// Exports: getPriceString

// Module 7809 (getPriceString)
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
          const price = require(3811) /* _createForOfIteratorHelperLoose */.getPrice(planIdFromItems);
          const obj2 = require(3811) /* _createForOfIteratorHelperLoose */;
          const formatPriceResult = require(5651) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return require(5651) /* formatSingleCurrencyPrice */.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5651) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
