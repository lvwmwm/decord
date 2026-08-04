// Module ID: 9959
// Function ID: 9960
// Name: usePremiumProductPricingString
// Dependencies: [5767, 1876, 3931, 5770, 589, 2]
// Exports: default

// Module 9959 (usePremiumProductPricingString)
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(3931).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(3931);
  _require = _require(5770).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5770);
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
