// Module ID: 9689
// Function ID: 75409
// Name: usePremiumProductPricingString
// Dependencies: [5621, 3776, 5624, 566, 2]
// Exports: default

// Module 9689 (usePremiumProductPricingString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("SubscriptionPlans").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(first, first1) {
  let priceString;
  const planIdForPremiumType = _require(3776).getPlanIdForPremiumType(first, first1);
  const obj = _require(3776);
  _require = _require(5624).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getProduct(closure_0));
  if (null != stateFromStores) {
    priceString = stateFromStores.priceString;
  }
  let str = "$...";
  if (null != priceString) {
    str = priceString;
  }
  return str;
};
