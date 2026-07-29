// Module ID: 9709
// Function ID: 9710
// Name: usePremiumProductPricingString
// Dependencies: [5672, 1876, 3835, 5675, 589, 2]
// Exports: default

// Module 9709 (usePremiumProductPricingString)
import updateProduct from "updateProduct";
import { PRICE_PLACEHOLDER } from "GuildFeatures";

const require = arg1;
const result = require("getPremiumPlanItem").fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(closure_0, c3) {
  const planIdForPremiumType = _require(3835).getPlanIdForPremiumType(closure_0, c3);
  const obj = _require(3835);
  _require = _require(5675).getProductIdForGift(planIdForPremiumType);
  const obj2 = _require(5675);
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
