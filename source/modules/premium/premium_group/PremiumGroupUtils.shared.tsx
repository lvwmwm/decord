// Module ID: 7731
// Function ID: 61473
// Name: getPriceString
// Dependencies: []
// Exports: getPriceString

// Module 7731 (getPriceString)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(premiumSubscription, arg1) {
  let interval;
  let intervalCount;
  if (null != premiumSubscription) {
    if (premiumSubscription.hasAnyPremiumGroup) {
      const planIdFromItems = premiumSubscription.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        const value = closure_2.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = arg1(dependencyMap[1]).getPrice(planIdFromItems);
          const obj2 = arg1(dependencyMap[1]);
          const formatPriceResult = arg1(dependencyMap[2]).formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return arg1(dependencyMap[2]).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
          const obj3 = arg1(dependencyMap[2]);
        }
      }
    }
  }
  return null;
};
