// Module ID: 9961
// Function ID: 9962
// Name: usePremiumProductPricingString
// Dependencies: [5779, 1905, 3930, 5782, 589, 2]
// Exports: default

// Module 9961 (usePremiumProductPricingString)
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(3930).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(3930);
  _require = _require(5782).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5782);
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
