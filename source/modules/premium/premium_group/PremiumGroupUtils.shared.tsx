// Module ID: 7737
// Function ID: 61510
// Name: getPriceString
// Dependencies: [3781, 3776, 5618, 2]
// Exports: getPriceString

// Module 7737 (getPriceString)
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
          const formatPriceResult = require(5618) /* formatSingleCurrencyPrice */.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return require(5618) /* formatSingleCurrencyPrice */.formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = require(5618) /* formatSingleCurrencyPrice */;
        }
      }
    }
  }
  return null;
};
