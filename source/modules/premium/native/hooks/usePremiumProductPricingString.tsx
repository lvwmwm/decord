// Module ID: 10088
// Function ID: 10089
// Name: usePremiumProductPricingString
// Dependencies: [5899, 1924, 4007, 5902, 589, 2]
// Exports: default

// Module 10088 (usePremiumProductPricingString)
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(4007).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(4007);
  _require = _require(5902).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5902);
  const items = [updateProduct];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_2.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
