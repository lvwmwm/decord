// Module ID: 9647
// Function ID: 75217
// Name: usePremiumProductPricingString
// Dependencies: [5619, 1852, 3777, 5622, 566, 2]
// Exports: default

// Module 9647 (usePremiumProductPricingString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(first, first1) {
  let priceString;
  const planIdForPremiumType = _require(3777).getPlanIdForPremiumType(first, first1);
  const obj = _require(3777);
  _require = _require(5622).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5622);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getProduct(closure_0));
  if (null != stateFromStores) {
    priceString = stateFromStores.priceString;
  }
  if (null == priceString) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
