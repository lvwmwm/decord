// Module ID: 9723
// Function ID: 9724
// Name: usePremiumProductPricingString
// Dependencies: [5676, 1876, 3839, 5679, 589, 2]
// Exports: default

// Module 9723 (usePremiumProductPricingString)
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(3839).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(3839);
  _require = _require(5679).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5679);
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
